import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // 👈 hides the black top bar
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'KidVerse Daily',
        }}
      />
      <Tabs.Screen
        name="modal"
        options={{
          href: null, // keep modal route but hide it from tab bar
        }}
      />
    </Tabs>
  );
}
