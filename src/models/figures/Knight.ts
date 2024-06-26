import blackLogo from '../../assets/knight-black.svg'
import whiteLogo from '../../assets/knight-white.svg'
import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KNIGHT
	}
}
