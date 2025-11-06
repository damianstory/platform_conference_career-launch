import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsscdjcyqhxiyuynwevb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc2NkamN5cWh4aXl1eW53ZXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDE0MTAsImV4cCI6MjA3NzMxNzQxMH0.uhw97ZF7ah0WkDuEXHp2LMdb6-ivCAIc87yxmWwXzzg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function verifyBlocks() {
  console.log('Fetching current block distribution...\n');

  for (let block = 1; block <= 4; block++) {
    const { data, error } = await supabase
      .from('sessions')
      .select('id, title, block_number, display_order')
      .eq('block_number', block)
      .order('display_order');

    if (error) {
      console.error(`Error fetching Block ${block}:`, error);
    } else {
      console.log(`Block ${block}: ${data.length} sessions`);
      data.forEach(session => {
        console.log(`  ${session.display_order}. ${session.title}`);
      });
      console.log('');
    }
  }
}

verifyBlocks().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
