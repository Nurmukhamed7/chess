import blackLogo from '../../assets/rook-black.svg'
import whiteLogo from '../../assets/rook-white.svg'
import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.ROOK
	}
}
