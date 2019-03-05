import { createGlobalStyle } from 'styled-components'

export const GlobalIconfont = createGlobalStyle `
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1551796022600'); /* IE9 */
    src: url('./iconfont.eot?t=1551796022600#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZQAAsAAAAAC5AAAAYEAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDVgqJcIgYATYCJAMcCxAABCAFhG0HVRvdCcgekiRYQAEFAAq8hqIjeP5/zN0nX+aaROOyAFUThxRXGjFSKiGNEv/wdKt/b2Y51ZKzJ9TCSLsOE3w1Ldz9Y/3vtgPwfRDDCSCobnvdTeCJJRBBFD1w80BNAoGEFr10cCz1076B8uztgV4tOyhyOkqgAUW0tcB0E5ryUDaMXZjA3RBQtTQB3ArLmcCNU+QCy5pUzANuIQPPIYusjilnFpAbOMvTTOQEAPzYPy8/iA03gAoJlCM/jwIhyB4B92vQwe9dk4kAwvZsAHUeGDgBOORMddyhruxkK6ppv+PkFaAuUz4C70XcS7xXcb/me8EjICRRUqKuqe4GUSCU9fHHmwFS1CH2OxnxCNAFvjIQ6ghQGQF1CFQmQh0KlRWQBcN/jehUKZK5ZxOMAbkA0J5ccKZjxql67SQuPu5ubv6UYH8vqifqG07zxKIiPZR/Q4dBu51ttTIB9qwGSF8zkrZqXSg6dy0TDJqNFghXroXzdpt2Bg+u5lDhMkfRQVuUJ8amMjE5pb7BEoHND+LytlNMAFQD24MZT0EDh2PAjOms/1aDwTUU034I5aaSoxk7bTZrup/fDitmLD1mtxvi/nU4qozWautk1lkbxeRfjTWe7bjEPmfvsVrzqYfsbLuDYzNpOlvDwHjD0zkc+FkcY4AlkDNrlT9raLYf08xhchqNFkMgZ51p7NBQbQEWY4qcy8TEswwBmUGj0EzQTP4ZQ4NyOURk8ajrpJvzhlb4rwixrF27MmBl8NCaZq/0HO8h/0FzTzP2uYGLluUoozXdbFxrCDzPcZhYNptWAwZxs7nNyMbb2aEhbtaqFXP8/gKUzuFoE7HGfoZpHaNsHslN5gveAGMAO2hYtWLES82qdE5W9dW7WDOs7+hsMKSQ/PpIfTOm+T7+MeibZpfmm+uPrt+vDz523Pc4xnfJ8HNH4hB3vwzFjbHiiNramzfraiPAHlHR2TH5ZwmP7/w8uyyzioXk8qWZDqfPFx15MJkBnXPo6rFsKa2ZUpadeqeFQx4P9v8cMvLlyAhw9mnWtC1XtzPUSM8YzYINlzYrxqbHshsbGWS/xGRtTTLuF06Or5OocImS6VQV5nRPzNi8ebuW3aJy8RPK6qJbgcSPB7PzmVEPooytYDbUVx5SulSUHENci+tlm3+ATT09TVgKSR6MNvd0NyEqF70YOExzKxSHMKamFIjZLHGueRojKsYQWc+NZBe6zqTmHz4cFRuTT53jWmcHz2a3js9ocJlNy3/ziuXFPqHHiOev86jyFs9fPT19PVEO394C/fXcOleYmUebQYufzRQf37C4OmGsm2WBVR0f4hp3u+5GxA38kh6us0HC/sEpZt/yCcfpyMxN/89Ac9tjrs0I8g7qLCgIL4pYUBieHy6VhuX5NZVJt8d+bvlSGUOGXTc/vLAyuyytZLo5HSYiMzZtmoHmgPa1HsUrqOtTwj8crndzh03j5erj/h42lZdX9yutK5fHjaXEcnPbuMOnCl9+zcRNHb7Twghqdy6PMzx0mKTQa+mFoB8AyoMMRIMBKN9tDwqgPMpZaCAA5WhOQpM42p38B0VSn+wQ8vFn2Yv0Nj1v9Ux/60Z5Jlb8LV+daPvL0QL1BG+8ktLCX0NYcsBFsSJL0kTogpKu5P4axRRU1QX4JTxd19pTDUoL/z7VwAeVLMBkK6RjTxDUnCHKrlB1VHR+TY8WSsodwMFUAKLtT1BNv2DaTiIdexWCoacQtQOFqq/wvWLNJqRYnpbgkYQQ53fhUoFaJdLMJOaU1xJivYKnDYptKpvQ6qRhPIYeHU0XESpC28YxunZxLEmKcJFWrcQLwf0IhUKNa7RqGSEg6RKS1KQyGKK0d6IL1EqAeaFF4CERhHB8XXBSAmoqInN5Ehb7/loEMT0FHm1OX4GdjaClI908LgZddAlkkUJVqu9YanXaicUikU0E11u11JRwhchGUKgJNZwmfTcZggCJTlIjppGKgUaJyiro/auUx3kDUKW8TAoEotAJOkMX6ArdgDe1QI7k8NyVPLFKKpISWie9ztgZ4UtddRI9r1OqAgA=') format('woff2'),
    url('./iconfont.woff?t=1551796022600') format('woff'),
    url('./iconfont.ttf?t=1551796022600') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1551796022600#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`