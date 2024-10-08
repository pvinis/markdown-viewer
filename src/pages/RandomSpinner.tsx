import {
	BeatLoader,
	BounceLoader,
	CircleLoader,
	ClimbingBoxLoader,
	PropagateLoader,
	PulseLoader,
	ScaleLoader,
	SkewLoader,
} from "react-spinners"
import { useTWColor } from "../hooks/useTWColor"

const spinnerOptions = [
	{
		spinner: (p: any) => (
			<>
				<span className="text-3xl text-on-background">M</span>
				<SkewLoader {...p} />
			</>
		),
	},
	{ spinner: (p: any) => <CircleLoader {...p} /> },
	{ spinner: (p: any) => <BeatLoader {...p} /> },
	{ spinner: (p: any) => <BounceLoader {...p} /> },
	{ spinner: (p: any) => <ClimbingBoxLoader {...p} /> },
	{ spinner: (p: any) => <PropagateLoader {...p} /> },
	{ spinner: (p: any) => <PulseLoader {...p} /> },
	{ spinner: (p: any) => <ScaleLoader {...p} /> },
]

export function RandomSpinner() {
	const randomSpinnerIndex = Math.floor(Math.random() * spinnerOptions.length)
	const SelectedSpinner = spinnerOptions[randomSpinnerIndex].spinner
	const color = useTWColor("on-background")

	return <SelectedSpinner color={color} />
}
