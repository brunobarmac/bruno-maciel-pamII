import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Esconde o cabeçalho da pasta (tabs) para não duplicar */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Define a página modal como um modal de verdade */}
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Configurações' }} />
      
      {/* Página de erro 404 */}
      <Stack.Screen name="+not-found" options={{ title: 'Ops!' }} />
    </Stack>
  );
}