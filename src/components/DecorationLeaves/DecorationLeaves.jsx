const DecorationLeaves = ({ classes, leftSrc, rightSrc }) => (
	<>
		<img
			alt="Decoration leaves - left"
			className={classes.decorationLeavesLeft}
			src={`/assets/${leftSrc}.png`}
		/>
		<img
			alt="Decoration leaves - right"
			className={classes.decorationLeavesRight}
			src={`/assets/${rightSrc}.png`}
		/>
	</>
);

export default DecorationLeaves;
