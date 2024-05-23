import { useEffect, useState } from 'react'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'

function App() {
	const [board, setBoard] = useState(new Board())

	useEffect(() => {
		restart()
	}, [])

	function restart() {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		console.log(newBoard)
		setBoard(newBoard)
	}
	return (
		<div className=' flex flex-col justify-center items-center'>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}

export default App
