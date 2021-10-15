import React from "react";
import styled from "styled-components";
type TStatusLeague = "hidden" | "not_selected" | "force_selected" | "selected";
export type TLeagueCard = {
  id: string;
  slug: string;
  name: string;
  region: string;
  image: string;
  priority: number;
  displayPriority: {
    position: number;
    status: TStatusLeague;
  };
};

interface IStyled {
  active: boolean;
  onClick: () => void;
}
interface ILeagueCardProps extends IStyled {
  league: TLeagueCard;
}
const LeagueCardLayout = styled.div<IStyled>`
  border-radius: 15px;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  gap: 0 10px;
  background: ${(p) => (p.active ? p.theme.primary : p.theme.bgBlock1)};

  cursor: pointer;

  img {
    width: 50px;
  }
  .league {
    &--name {
      font-weight: bold;
      text-transform: uppercase;
    }
    &--region {
      font-size: 0.75rem;
    }
  }
`;
const LeagueCard = ({
  league,
  active = false,
  onClick = () => {},
}: ILeagueCardProps) => {
  return (
    <LeagueCardLayout active={active} onClick={onClick}>
      <img src={league.image} alt={league.name} />
      <div className="league">
        <div className="league--name">{league.name}</div>
      </div>
    </LeagueCardLayout>
  );
};

export default LeagueCard;
