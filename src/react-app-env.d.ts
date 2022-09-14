/// <reference types="react-scripts" />

interface EthereumProvider {
  chainId: string
  isMetaMask?: boolean
  request({ [string]: any }): Promise<any>
  on(event: string, callback: (accounts: string[] | string | undefined) => void)
}

interface Window {
  ethereum?: EthereumProvider
}
