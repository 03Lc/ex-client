const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

async function pingSupabase() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const { data, error } = await supabase.from('movies').select('id').limit(1);
    if (!error) {
      console.log('Keep-alive ping successful. Sample row:', data);
      return true;
    }
    console.error(`Attempt ${attempt} failed:`, error.message);
    if (attempt < 3) await new Promise(r => setTimeout(r, 5000));
  }
  return false;
}

(async () => {
  const success = await pingSupabase();
  if (!success) process.exit(1);
})();
