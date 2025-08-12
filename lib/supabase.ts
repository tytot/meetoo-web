import { createClient } from '@supabase/supabase-js';
import { supabaseKey, supabaseLegacyKey, supabaseUrl } from './constants';

export const supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
        headers: {
            Authorization: `Bearer ${supabaseLegacyKey}`,
        },
    },
});
