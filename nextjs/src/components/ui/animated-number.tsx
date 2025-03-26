'use client'

import React, { useState, useEffect } from 'react'
import * as m from 'motion/react-m'

export const AnimatedNumber = ({ targetNumber }: { targetNumber: any }) => {
	const [value, setValue] = useState(0)

	useEffect(() => {
		let timeoutId = undefined

		if (value < targetNumber) {
			timeoutId = setTimeout(() => {
				setValue((prevValue) => prevValue + 1)
			}, 20) // Adjust the delay to control the animation speed
		}

		return () => clearTimeout(timeoutId)
	}, [value, targetNumber])

	return (
		<m.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className={'tabular-nums'}
		>
			{value}
		</m.div>
	)
}
