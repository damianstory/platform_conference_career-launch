import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsscdjcyqhxiyuynwevb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxzc2NkamN5cWh4aXl1eW53ZXZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NDE0MTAsImV4cCI6MjA3NzMxNzQxMH0.uhw97ZF7ah0WkDuEXHp2LMdb6-ivCAIc87yxmWwXzzg';

const supabase = createClient(supabaseUrl, supabaseKey);

async function forceUpdate() {
  console.log('Finding sessions to move...\n');

  // Get all sessions
  const { data: allSessions } = await supabase
    .from('sessions')
    .select('*')
    .order('block_number')
    .order('display_order');

  console.log('Total sessions:', allSessions.length);
  console.log('\nFinding Family Medicine and Cloud Computing...\n');

  const familyMed = allSessions.find(s => s.title.includes('Family Medicine'));
  const cloudComputing = allSessions.find(s => s.title.includes('Cloud Computing'));

  if (familyMed) {
    console.log(`Found: ${familyMed.title} (ID: ${familyMed.id}, currently Block ${familyMed.block_number})`);

    const { error } = await supabase
      .from('sessions')
      .update({ block_number: 3, display_order: 7 })
      .eq('id', familyMed.id);

    if (error) {
      console.error('Error moving Family Medicine:', error);
    } else {
      console.log('✓ Moved Family Medicine to Block 3');
    }
  }

  if (cloudComputing) {
    console.log(`Found: ${cloudComputing.title} (ID: ${cloudComputing.id}, currently Block ${cloudComputing.block_number})`);

    const { error } = await supabase
      .from('sessions')
      .update({ block_number: 4, display_order: 8 })
      .eq('id', cloudComputing.id);

    if (error) {
      console.error('Error moving Cloud Computing:', error);
    } else {
      console.log('✓ Moved Cloud Computing to Block 4');
    }
  }

  // Verify the changes
  console.log('\nVerifying changes...\n');

  const { data: block3 } = await supabase
    .from('sessions')
    .select('*')
    .eq('block_number', 3)
    .order('display_order');

  const { data: block4 } = await supabase
    .from('sessions')
    .select('*')
    .eq('block_number', 4)
    .order('display_order');

  console.log(`Block 3: ${block3.length} sessions`);
  console.log(`Block 4: ${block4.length} sessions`);
}

forceUpdate().then(() => {
  console.log('\n✅ Done!');
  process.exit(0);
}).catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
