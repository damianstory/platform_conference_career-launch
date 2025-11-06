import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsscdjcyqhxiyuynwevb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc2NkamN5cWh4aXl1eW53ZXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDE0MTAsImV4cCI6MjA3NzMxNzQxMH0.uhw97ZF7ah0WkDuEXHp2LMdb6-ivCAIc87yxmWwXzzg';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function updateBlocks() {
  console.log('Updating block distribution...\n');

  // Move Environmental Scientist from Block 1 to Block 4
  const { error: error1 } = await supabase
    .from('sessions')
    .update({ block_number: 4, display_order: 7 })
    .eq('id', '770e8400-e29b-41d4-a716-446655440006');

  if (error1) {
    console.error('Error updating Environmental Scientist:', error1);
  } else {
    console.log('✓ Moved Environmental Scientist to Block 4');
  }

  // Move Forensic Scientist from Block 2 to Block 4
  const { error: error2 } = await supabase
    .from('sessions')
    .update({ block_number: 4, display_order: 8 })
    .eq('id', '770e8400-e29b-41d4-a716-446655440012');

  if (error2) {
    console.error('Error updating Forensic Scientist:', error2);
  } else {
    console.log('✓ Moved Forensic Scientist to Block 4');
  }

  console.log('\nUpdated distribution:');
  console.log('- Block 1: 5 sessions');
  console.log('- Block 2: 5 sessions');
  console.log('- Block 3: 7 sessions');
  console.log('- Block 4: 8 sessions');
}

updateBlocks().then(() => {
  console.log('\n✅ Block distribution updated successfully!');
  process.exit(0);
}).catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
