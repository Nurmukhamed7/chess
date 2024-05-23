import blackLogo from '../../assets/bishop-black.svg'
import whiteLogo from '../../assets/bishop-white.svg'
import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.BISHOP
	}
}
