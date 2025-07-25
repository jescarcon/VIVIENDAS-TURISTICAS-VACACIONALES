/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEBUG_MODE: string;
  readonly VITE_LOCAL_API_URL: string;
  readonly VITE_REMOTE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
