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

const spinnerOptions = [
	{
		spinner: () => (
			<>
				<span className="text-7xl">M</span>
				<SkewLoader />
			</>
		),
	},
	{ spinner: CircleLoader },
	{ spinner: BeatLoader },
	{ spinner: BounceLoader },
	{ spinner: ClimbingBoxLoader },
	{ spinner: PropagateLoader },
	{ spinner: PulseLoader },
	{ spinner: ScaleLoader },
]

export function RandomSpinner() {
	const randomSpinnerIndex = Math.floor(Math.random() * spinnerOptions.length)
	const SelectedSpinner = spinnerOptions[randomSpinnerIndex].spinner

	return <SelectedSpinner />
}
