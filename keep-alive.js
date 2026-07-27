const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

(async () => {
  const { data, error } = await supabase
    .from('movies')
    .select('id')
    .limit(1);

  if (error) {
    console.error('Keep-alive ping failed:', error.message);
    process.exit(1);
  }

  console.log('Keep-alive ping successful. Sample row:', data);
})();
