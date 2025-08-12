'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { z } from 'zod';
import { Eye, EyeOff, Fingerprint } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import { FunctionsHttpError } from '@supabase/supabase-js';
import { wwwHostname } from '@/lib/constants';

const PasswordFormSchema = z
    .object({
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters.',
        }),
        confirmPassword: z.string(),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Passwords must match.',
                path: ['confirmPassword'],
            });
        }
    });

const VerificationCodeFormSchema = PasswordFormSchema.and(
    z.object({
        verificationCode: z.string().min(6, {
            message: '',
        }),
    })
);

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [requireVerificationCode, setRequireVerificationCode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const formSchema = useMemo(
        () => (requireVerificationCode ? VerificationCodeFormSchema : PasswordFormSchema),
        [requireVerificationCode]
    );

    const form = useForm<z.infer<typeof VerificationCodeFormSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            password: '',
            confirmPassword: '',
            verificationCode: '',
        },
    });

    async function sendVerificationCode() {
        setIsLoading(true);
        const { error } = await supabase.functions.invoke('send-password-reset-verification-code', {
            body: { token: searchParams.get('token'), profile_id: searchParams.get('profile_id') },
        });
        if (error) {
            await toastError(error);
        } else {
            setRequireVerificationCode(true);
            toast('Verify your identity', {
                description: (
                    <p className="text-muted-foreground text-sm m-0">
                        A verification code has been sent to your phone.
                    </p>
                ),
                icon: <Fingerprint size={18} />,
            });
        }
        setIsLoading(false);
    }

    async function resetPassword(data: z.infer<typeof VerificationCodeFormSchema>) {
        setIsLoading(true);
        const { error } = await supabase.functions.invoke('reset-password', {
            body: {
                token: searchParams.get('token'),
                profile_id: searchParams.get('profile_id'),
                verification_code: data.verificationCode,
                new_password: data.password,
            },
        });
        if (error) {
            await toastError(error);
        } else {
            toast.success(
                <span className="flex items-center justify-between">
                    <p className="m-0">Password updated successfully!</p>
                    <Button
                        size="sm"
                        className="h-8 p-3 rounded-sm font-semibold"
                        onClick={() => {
                            toast.dismiss();
                        }}
                        asChild
                    >
                        <a href={`${wwwHostname}/login`} target="_blank">
                            Login
                        </a>
                    </Button>
                </span>,
                {
                    duration: 10000,
                    classNames: {
                        toast: 'rounded-md',
                        content: 'flex-1',
                    },
                }
            );
            setIsComplete(true);
        }
        setIsLoading(false);
    }

    async function toastError(error: any) {
        const errorMessage =
            error instanceof FunctionsHttpError ? (await error.context.json()).message : 'Something went wrong.';
        toast.error(errorMessage);
    }

    async function onSubmit(data: z.infer<typeof VerificationCodeFormSchema>) {
        if (formSchema === PasswordFormSchema) {
            await sendVerificationCode();
        } else {
            await resetPassword(data);
        }
    }

    useEffect(() => {
        if (form.formState.isSubmitSuccessful) {
            form.reset(undefined, { keepValues: true });
        }
    }, [form.formState, form.reset]);

    return (
        <main className="h-full max-w-lg p-8 mx-auto">
            <h1 className="text-4xl">Reset Password</h1>
            <p className="text-xl mb-8">Saving a new password will sign you out on all your devices.</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="mb-4">
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            type={showPassword ? 'text' : 'password'}
                                            className="pr-10"
                                            disabled={isLoading || isComplete}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            tabIndex={-1}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage className="mb-0" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="mb-8">
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            {...field}
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            className="pr-10"
                                            disabled={isLoading || isComplete}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                            tabIndex={-1}
                                        >
                                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {requireVerificationCode && (
                        <FormField
                            control={form.control}
                            name="verificationCode"
                            render={({ field }) => (
                                <FormItem className="mb-6">
                                    <FormLabel>Verification Code</FormLabel>
                                    <FormControl>
                                        <InputOTP
                                            maxLength={6}
                                            pattern={REGEXP_ONLY_DIGITS}
                                            {...field}
                                            disabled={isLoading || isComplete}
                                        >
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Please enter the verification code sent to your phone.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <Button
                        type="submit"
                        size="lg"
                        loading={isLoading}
                        disabled={isLoading || isComplete}
                        className="w-full text-lg"
                    >
                        Submit
                    </Button>
                </form>
            </Form>
        </main>
    );
}
