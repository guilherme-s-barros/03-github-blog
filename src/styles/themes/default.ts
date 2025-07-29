import { css } from 'styled-components'

import { _primitives } from './_primitives'

export const defaultTheme = {
	color: {
		brand: {
			primary: _primitives.color.blue[50],
		},
		base: {
			title: _primitives.color.gray[5],
			subtitle: _primitives.color.gray[10],
			text: _primitives.color.gray[20],
			span: _primitives.color.gray[30],
			label: _primitives.color.gray[40],
			border: _primitives.color.gray[50],
			post: _primitives.color.gray[60],
			profile: _primitives.color.gray[70],
			background: _primitives.color.gray[80],
			input: _primitives.color.gray[90],
		},
	},
	text: {
		heading: {
			titleL: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size['2xl']};
        line-height: ${_primitives.text.height.sm};
        font-weight: ${_primitives.text.weight.bold};
      `,
			titleM: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size.xl};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.bold};
      `,
			titleS: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size.lg};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
		body: {
			regularM: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size.md};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.regular};
      `,
			regularS: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size.sm};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.regular};
      `,
		},
		component: {
			link: css`
        font-family: '${_primitives.text.font}', sans-serif;
        font-size: ${_primitives.text.size.xs};
        line-height: ${_primitives.text.height.lg};
        font-weight: ${_primitives.text.weight.bold};
      `,
		},
	},
} as const
