import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRation: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeigth = Dimensions.get('window').height
        const boardHeigth = totalHeigth * (1 - this.headerRation)
        return Math.floor(boardHeigth / this.blockSize)
    }
}

export default params