import { memo } from "react";
import type { FC } from "react";

import resets from "../../_resets.module.css";
import classes from "./Component25.module.css";
import { Path38Icon } from "./Path38Icon";
import { Path39Icon } from "./Path39Icon";
import { Path40Icon } from "./Path40Icon";
import { Rectangle130Icon } from "./Rectangle130Icon";
import { Rectangle131Icon } from "./Rectangle131Icon";
import { Union3Icon } from "./Union3Icon";

interface Props {
  className?: string;
}
/* @figmaId 28:1603 */
export const Component25: FC<Props> = memo(function Component25(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.union3}>
        <Union3Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle130}>
        <Rectangle130Icon className={classes.icon2} />
      </div>
      <div className={classes.email}>Email </div>
      <div className={classes.rectangle131}>
        <Rectangle131Icon className={classes.icon3} />
      </div>
      <div className={classes.cADASTRAR}>CADASTRAR</div>
      <div className={classes.fIQUEPORDENTRODASNOSSASPROMOCO}>
        FIQUE POR DENTRO DAS NOSSAS PROMOÇÕES
      </div>
      <div className={classes.facebookTwitterInstagram}>
        <div className={classes.textBlock}>Facebook</div>
        <div className={classes.textBlock2}>Twitter</div>
        <div className={classes.textBlock3}>Instagram</div>
      </div>
      <div className={classes.path38}>
        <Path38Icon className={classes.icon4} />
      </div>
      <div className={classes.path39}>
        <Path39Icon className={classes.icon5} />
      </div>
      <div className={classes.path40}>
        <Path40Icon className={classes.icon6} />
      </div>
      <div className={classes.ruaSoledade512SantaEfigeniaBel}>
        <div className={classes.textBlock4}>
          Rua Soledade 512, Santa Efigênia, Belo Horizonte - MG
        </div>
        <div className={classes.textBlock5}>+55(31) 2762-7822</div>
        <div className={classes.textBlock6}>contato@DELUXE.com</div>
      </div>
      <div className={classes.navItem}>Cardápio</div>
      <div className={classes.navItem2}>Contato</div>
      <div className={classes.navItem3}>Unidades</div>
      <div className={classes.navItem4}>Acomodações</div>
      <div className={classes.GrupoLUXOR}>© Grupo DELUXE</div>
      <div className={classes.lOGO}>DELUXE</div>
    </div>
  );
});
