import blackLogo from '../../assets/pawn-black.svg'
import whiteLogo from '../../assets/pawn-white.svg'
import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Pawn extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.PAWN
	}
}
