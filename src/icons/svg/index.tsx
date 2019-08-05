import React, { ComponentType } from 'react'
import { SvgIcon } from '@material-ui/core'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

interface ISvgProps extends SvgIconProps {
  height?: number
  width?: number
  size: number // setting this, will both set height and width to this value
  scale?: number // multiply size by a factor of ...
  fill?: 'none' | string
  children?: JSX.Element | JSX.Element[]
  className?: string
}

export interface ISvgButton extends ISvgProps {
  active?: boolean
  primary?: string
  secondary?: string
}

// This type can be used to pass-through inside props, and then render it elsewere
export type TSvgButton = ComponentType<ISvgButton>

/**
 * getColor
 * @param active {boolean}
 * @param primary {hexadecimal}
 * @param secondary {hexadecimal}
 */
const getColor = (active: boolean | undefined, primary?: string, secondary?: string) =>
  active === true ? secondary || '#339AF0' : primary || '#CCC'

/**
 * SVG
 * If size is set, it will overwrite both height and width with its value
 * If scale is set, you can change the size of both height and width with the correct aspect
 */
const SVG = ({ height, width, size, scale, fill, children }: ISvgProps) => {
  if (size) {
    height = width = size
  }

  if (scale && (height && width)) {
    width *= scale
    height *= scale
  }

  return (
    <SvgIcon
      height={height}
      width={width}
      fill={fill || 'none'}
      viewBox={`0 0 ${height} ${width}`}
    >
      {children}
    </SvgIcon>
  )
}

export const dashboard = ({ active, primary, secondary, ...rest }: ISvgButton) => {
  return (
    <SVG {...rest}>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={getColor(active, primary, secondary)}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.2398 7.76001L14.1198 14.12L7.75977 16.24L9.87977 9.88001L16.2398 7.76001Z"
        stroke={getColor(active, primary, secondary)}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SVG>
  )
}

export const edit = ({ active, primary, secondary, ...rest }: ISvgButton) => (
  <SVG {...rest}>
    <path
      d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
      stroke={getColor(active, primary, secondary)}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
      stroke={getColor(active, primary, secondary)}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SVG>
)

/**
 * Codaisseur SVG icon
 */
export const codaisseur = ({ ...props }: ISvgButton) => (
  <SVG {...props}>
    <path
      d="M4.07328 6.96881C4.63638 6.96881 5.09049 7.12594 5.42956 7.4402C5.76863 7.75447 5.93817 8.16542 5.93817 8.67308C5.93817 9.19282 5.76863 9.61586 5.42351 9.93617C5.07838 10.2625 4.63032 10.4196 4.07328 10.4196C3.52229 10.4196 3.06818 10.2565 2.72306 9.93012C2.37188 9.60377 2.19629 9.18677 2.19629 8.67308C2.19629 8.16542 2.37188 7.75447 2.717 7.4402C3.06213 7.12594 3.51018 6.96881 4.07328 6.96881ZM4.07328 13.5985C4.63638 13.5985 5.09655 13.7557 5.44167 14.0699C5.78679 14.3842 5.96238 14.7951 5.96238 15.3028C5.96238 15.8165 5.78679 16.2335 5.44167 16.5598C5.09655 16.8862 4.64243 17.0433 4.07328 17.0433C3.52229 17.0433 3.06818 16.8801 2.72306 16.5538C2.37188 16.2274 2.19629 15.8104 2.19629 15.3028C2.19629 14.8012 2.37188 14.3902 2.717 14.076C3.06818 13.7557 3.51624 13.5985 4.07328 13.5985Z"
      fill="#C1272D"
    />
    <path
      d="M11.836 11.997C12.2962 12.2992 12.6171 12.6497 12.7987 13.0486C12.9743 13.4474 13.0651 14.1364 13.0651 15.1154V16.4631C13.0651 17.0796 13.1136 17.4724 13.2165 17.6295C13.3194 17.7867 13.5071 17.8954 13.7917 17.9498C13.8583 17.968 13.9612 17.9861 14.0945 18.0042C14.7908 18.107 15.1359 18.4394 15.1359 19.0014C15.1359 19.2794 15.033 19.497 14.8331 19.6662C14.6333 19.8354 14.3609 19.92 14.0279 19.92C13.598 19.92 13.1862 19.8475 12.7806 19.7085C12.3809 19.5695 12.0479 19.3761 11.7815 19.1344C11.4909 18.8745 11.2911 18.5361 11.17 18.1251C11.0489 17.7141 10.9883 17.001 10.9883 16.0038V14.916C10.9883 13.8161 10.4797 13.1815 9.46252 13.0183C9.42014 13.0063 9.38986 13.0002 9.3717 13.0002C9.07501 12.9519 8.86309 12.8491 8.71778 12.686C8.57852 12.5228 8.50586 12.2931 8.50586 11.991C8.50586 11.725 8.56641 11.5135 8.6875 11.3624C8.8086 11.2053 8.9963 11.0965 9.26271 11.03C9.37775 10.9938 9.54729 10.9515 9.76526 10.9092C10.5766 10.7581 10.9883 10.1537 10.9883 9.10216V8.01433C10.9883 7.08363 11.0368 6.42489 11.1276 6.0502C11.2184 5.6755 11.3758 5.34915 11.5938 5.06511C11.8481 4.75689 12.1932 4.50911 12.6292 4.33989C13.0591 4.16463 13.5374 4.08002 14.0581 4.08002C14.3851 4.08002 14.6454 4.16463 14.8392 4.33384C15.033 4.50306 15.1359 4.72063 15.1359 4.99863C15.1359 5.57276 14.7665 5.91724 14.0218 6.03207C13.9552 6.03811 13.9068 6.04415 13.8765 6.0502C13.5677 6.09854 13.3558 6.20733 13.2407 6.38259C13.1257 6.55785 13.0651 6.95068 13.0651 7.56711V8.90877C13.0651 9.82738 12.9743 10.4982 12.7927 10.9273C12.5989 11.3624 12.2841 11.713 11.836 11.997Z"
      fill="#C1272D"
    />
    <path
      d="M18.1562 6.5578C18.1562 6.4611 18.1865 6.38254 18.2531 6.31001C18.3197 6.24354 18.3984 6.20728 18.4893 6.20728C18.7012 6.20728 18.9615 6.3221 19.2703 6.5578C19.5791 6.79349 19.9061 7.13193 20.2573 7.56706C20.7961 8.23789 21.1958 8.94498 21.4682 9.68833C21.7407 10.4317 21.8739 11.2052 21.8739 12.009C21.8739 12.8914 21.7104 13.7375 21.3835 14.5533C21.0565 15.3692 20.5661 16.1367 19.9243 16.8499C19.6457 17.152 19.3854 17.3877 19.1311 17.5509C18.8768 17.7141 18.6588 17.7987 18.4772 17.7987C18.3924 17.7987 18.3197 17.7685 18.2531 17.702C18.1865 17.6355 18.1562 17.557 18.1562 17.4603C18.1562 17.3575 18.2713 17.1158 18.5014 16.735C18.6709 16.451 18.8041 16.2274 18.901 16.0521C19.2824 15.339 19.561 14.6621 19.7305 14.0155C19.9 13.3749 19.9848 12.704 19.9848 12.009C19.9848 11.3865 19.9182 10.7822 19.7789 10.196C19.6397 9.60976 19.4338 9.02959 19.1492 8.44337C18.9918 8.12911 18.7859 7.76045 18.5377 7.33741C18.2773 6.92645 18.1562 6.66054 18.1562 6.5578Z"
      fill="#C1272D"
    />
  </SVG>
)
