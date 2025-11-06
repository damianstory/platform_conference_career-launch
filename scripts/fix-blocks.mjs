import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsscdjcyqhxiyuynwevb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc2NkamN5cWh4aXl1eW53ZXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDE0MTAsImV4cCI6MjA3NzMxNzQxMH0.uhw97ZF7ah0WkDuEXHp2LMdb6-ivCAIc87yxmWwXzzg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixBlocks() {
  console.log('Fixing block distribution...\n');

  // Get Family Medicine from Block 1
  const { data: familyMed } = await supabase
    .from('sessions')
    .select('*')
    .eq('title', 'Family Medicine: Your Community\'s Health Guardian')
    .single();

  if (familyMed) {
    // Move to Block 3 position 7
    const { error } = await supabase
      .from('sessions')
      .update({ block_number: 3, display_order: 7 })
      .eq('id', familyMed.id);

    if (!error) {
      console.log('✓ Moved Family Medicine to Block 3 (position 7)');
    } else {
      console.error('Error:', error);
    }
  }

  // Get Cloud Computing from Block 2
  const { data: cloudComputing } = await supabase
    .from('sessions')
    .select('*')
    .eq('title', 'Cloud Computing: Building in the Digital Sky')
    .single();

  if (cloudComputing) {
    // Move to Block 4 position 8
    const { error } = await supabase
      .from('sessions')
      .update({ block_number: 4, display_order: 8 })
      .eq('id', cloudComputing.id);

    if (!error) {
      console.log('✓ Moved Cloud Computing to Block 4 (position 8)');
    } else {
      console.error('Error:', error);
    }
  }

  console.log('\nNew distribution:');
  console.log('- Block 1: 5 sessions');
  console.log('- Block 2: 5 sessions');
  console.log('- Block 3: 7 sessions');
  console.log('- Block 4: 8 sessions');
}

fixBlocks().then(() => {
  console.log('\n✅ Block distribution fixed!');
  process.exit(0);
}).catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
