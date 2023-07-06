import { WALLET_CONNECT_PROJECT_ID } from '@/lib/env';
import { Core } from '@walletconnect/core';
import { ICore } from '@walletconnect/types';
import { IWeb3Wallet, Web3Wallet } from '@walletconnect/web3wallet';
import _cloneDeep from 'lodash/cloneDeep';

export let core: ICore;
export let web3wallet: IWeb3Wallet;

export default async function createWeb3Wallet() {
  core = new Core({
    // ...(__DEV__ && { logger: 'debug' }),
    projectId: WALLET_CONNECT_PROJECT_ID,
  });

  const wcWallet = await Web3Wallet.init({
    core,
    metadata: {
      name: 'GameChain',
      description:
        'GameChain is a game launcher that leverages blockchain technology to provide a seamless gaming experience. It offers transparent and secure transactions, true ownership of in-game assets, and a platform for peer-to-peer trading. With a user-friendly interface and advanced social features, GameChain revolutionizes the way gamers discover, download, and interact with games in the blockchain world.',
      url: 'https://walletconnect.com/', // Do we have this one
      icons: ['https://avatars.githubusercontent.com/u/37784886'], // Looks like we need to deploy our splash somewhere
    },
  });
  console.log('wc wallet', wcWallet);
  return { wcWallet: _cloneDeep(wcWallet) };
}

export async function _pair(params: { uri: string }) {
  return await core.pairing.pair({ uri: params.uri });
}
