import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'com.patitas.inventory',
  appName: 'Patitas Inventory',
  webDir: 'www',
  server: { androidScheme: 'https' },
  android: { allowMixedContent: true, backgroundColor: '#0d1117' }
};
export default config;
