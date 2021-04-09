import React from 'react'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledAbsoluteLink href="https://bscscan.com/tx/0x8466d56ea86ec78374f4c6e0ca3648746afa3cbbbd248250bca2278bba25b0b8">
        <TranslatedText translationId={2}>Liquidity Locking</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://farm.airswap.finance">
        <TranslatedText translationId={4}>Farm</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://www.binance.org/en/panama">Bridge</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://airswap.finance" className="active">
        <TranslatedText translationId={8}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://airswap.info">Analytics</StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://t.me/airswapbot">
        <TranslatedText translationId={14}>Airdrop</TranslatedText>
      </StyledAbsoluteLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 20px;
  line-height: 45px;
  font-weight: 500;
  @media (max-width: 600px) {
    display: none;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #12aab5;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  &:hover {
    color: #452a7a;
  }
  &.active {
    color: #452a7a;
  }
  @media (max-width: 400px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

export default Nav
