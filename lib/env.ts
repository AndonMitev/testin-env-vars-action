export function nonNull<T>(x: T | null | undefined, extraMessage: string): T {
  if (x == null) {
    throw new Error(`Unexpected null / undefined. Should exist value. (${extraMessage})`);
  }

  return x;
}

export const GOOGLE_CLIENT_ID = nonNull<string>(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  `env of "NEXT_PUBLIC_GOOGLE_CLIENT_ID" is not defined. Did you forget a definition in the ".env.local"?`
);

export const WALLET_CONNECT_PROJECT_ID = nonNull<string>(
  process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  `env of "NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID" is not defined. Did you forget a definition in the ".env.local"?`
);
