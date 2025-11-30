import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function ExploreScreen() {
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemedText type="title" style={{ fontFamily: 'System' }}>
        Explore
      </ThemedText>
    </ThemedView>
  );
}
