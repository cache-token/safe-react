import PolygonLogo from 'src/config/assets/polygon-matic.svg'
import { ETHEREUM_NETWORK, NetworkConfig } from 'src/config/networks/network.d'

const polygon = {
  environment: {
    production: {
      clientGatewayUrl: 'https://safe-client.polygon.gnosis.io/v1',
      txServiceUrl: 'https://safe-transaction.polygon.gnosis.io/api/v1',
      safeAppsUrl: 'https://apps.gnosis-safe.io',
      gasPrice: 1e9,
      rpcServiceUrl: 'https://polygon-rpc.com',
      networkExplorerName: 'PolygonScan',
      networkExplorerUrl: 'https://polygonscan.com',
      networkExplorerApiUrl: 'https://api.polygonscan.com',
    }
  },
  network: {
    id: ETHEREUM_NETWORK.POLYGON,
    backgroundColor: '#8247e5',
    textColor: '#ffffff',
    label: 'Polygon',
    isTestNet: false,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
      logoUri: PolygonLogo,
    },
  },
}

export default polygon
