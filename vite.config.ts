import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import generouted from "@generouted/react-router/plugin";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), generouted()],
    define: {
      VITE_GAMO: JSON.stringify(env.VITE_GAMO),
    },
  };
});
