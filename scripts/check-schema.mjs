import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsscdjcyqhxiyuynwevb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc2NkamN5cWh4aXl1eW53ZXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDE0MTAsImV4cCI6MjA3NzMxNzQxMH0.uhw97ZF7ah0WkDuEXHp2LMdb6-ivCAIc87yxmWwXzzg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSchema() {
  console.log('Fetching a sample session to see column names...\n');

  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .limit(1)
    .single();

  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Column names in sessions table:');
    console.log(Object.keys(data).join('\n'));
  }
}

checkSchema().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
