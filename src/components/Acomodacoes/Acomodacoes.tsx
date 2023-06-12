import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Acomodacoes.module.css';
import { Button_StateDefaultChangeIconI2 } from './Button_StateDefaultChangeIconI2/Button_StateDefaultChangeIconI2';
import { Button_StateDefaultChangeIconI } from './Button_StateDefaultChangeIconI/Button_StateDefaultChangeIconI';
import { Button_StateDefaultChangeIconN2 } from './Button_StateDefaultChangeIconN2/Button_StateDefaultChangeIconN2';
import { Button_StateDefaultChangeIconN } from './Button_StateDefaultChangeIconN/Button_StateDefaultChangeIconN';
import { Cafe_FilledTrue } from './Cafe_FilledTrue/Cafe_FilledTrue';
import { Calendar_FillTrue } from './Calendar_FillTrue/Calendar_FillTrue';
import { Chevron_down } from './Chevron_down/Chevron_down';
import { Component24_Property1IonBed } from './Component24_Property1IonBed/Component24_Property1IonBed';
import { Component25 } from './Component25/Component25';
import { Heart_FillTrue } from './Heart_FillTrue/Heart_FillTrue';
import { Search_FillTrue } from './Search_FillTrue/Search_FillTrue';
import { TextField_StyleOutlinedStateEn2 } from './TextField_StyleOutlinedStateEn2/TextField_StyleOutlinedStateEn2';
import { TextField_StyleOutlinedStateEn3 } from './TextField_StyleOutlinedStateEn3/TextField_StyleOutlinedStateEn3';
import { TextField_StyleOutlinedStateEn } from './TextField_StyleOutlinedStateEn/TextField_StyleOutlinedStateEn';
import { User_UserTrue } from './User_UserTrue/User_UserTrue';
import { Vector1Icon } from './Vector1Icon';
import { VectorIcon } from './VectorIcon';
import { VectorIcon2 } from './VectorIcon2';
import { VectorIcon3 } from './VectorIcon3';
import { VectorIcon4 } from './VectorIcon4';
import { VectorIcon5 } from './VectorIcon5';
import { VectorIcon6 } from './VectorIcon6';
import { VectorIcon7 } from './VectorIcon7';
import { VectorIcon8 } from './VectorIcon8';
import { VectorIcon9 } from './VectorIcon9';
import { VectorIcon10 } from './VectorIcon10';
import { VectorIcon11 } from './VectorIcon11';
import { VectorIcon12 } from './VectorIcon12';
import { VectorIcon13 } from './VectorIcon13';
import { VectorIcon14 } from './VectorIcon14';
import { VectorIcon15 } from './VectorIcon15';

interface Props {
  className?: string;
  hide?: {
    supportingText?: boolean;
    supportingText2?: boolean;
    supportingText3?: boolean;
    supportingText4?: boolean;
  };
}
/* @figmaId 28:872 */
export const Acomodacoes: FC<Props> = memo(function Acomodacoes(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Component25 />
      <div className={classes.reserva}>
        <div className={classes.frame40}>
          <TextField_StyleOutlinedStateEn
            className={classes.textField}
            swap={{
              iconsSearch_24px: (
                <Component24_Property1IonBed
                  swap={{
                    vector: <VectorIcon className={classes.icon} />,
                  }}
                />
              ),
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText}>Rio de Janeiro</div>,
              labelText: <div className={classes.labelText}>Escolha uma de nossas unidades</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn2
            className={classes.textField2}
            swap={{
              chevronDown: (
                <Calendar_FillTrue
                  swap={{
                    vector: <VectorIcon2 className={classes.icon2} />,
                  }}
                />
              ),
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText2}>Sexta 02/06</div>,
              labelText: <div className={classes.labelText2}>Check In</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn2
            className={classes.textField3}
            swap={{
              chevronDown: (
                <Calendar_FillTrue
                  swap={{
                    vector: <VectorIcon3 className={classes.icon3} />,
                  }}
                />
              ),
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText3}>Segunda 05/06</div>,
              labelText: <div className={classes.labelText3}>Check Out</div>,
            }}
          />
          <TextField_StyleOutlinedStateEn3
            className={classes.textField4}
            swap={{
              iconsSearch_24px: (
                <User_UserTrue
                  swap={{
                    vector: <VectorIcon4 className={classes.icon4} />,
                  }}
                />
              ),
              chevronDown: (
                <Chevron_down
                  swap={{
                    vector: <VectorIcon5 className={classes.icon5} />,
                  }}
                />
              ),
            }}
            hide={{
              supportingText: true,
            }}
            text={{
              inputText: <div className={classes.inputText4}>1 quarto, 2 hóspedes</div>,
              labelText: <div className={classes.labelText4}>Quartos / Hóspedes</div>,
            }}
          />
          <Button_StateDefaultChangeIconI
            className={classes.button}
            classes={{ style_layer: classes.style_layer }}
            swap={{
              addOutline: (
                <Search_FillTrue
                  swap={{
                    vector: <VectorIcon6 className={classes.icon6} />,
                  }}
                />
              ),
            }}
          />
        </div>
      </div>
      <div className={classes.rectangle16}></div>
      <div className={classes.navItem}>Cardápio</div>
      <div className={classes.navItem2}>Contato</div>
      <div className={classes.navItem3}>Unidades</div>
      <div className={classes.navItem4}>Acomodações</div>
      <div className={classes.login}>Login</div>
      <div className={classes.rectangle4}></div>
      <div className={classes.pT}>PT</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon16} />
      </div>
      <div className={classes.lOGO}>LUXOR</div>
      <div className={classes.frame121}>
        <div className={classes.frame110}>
          <div className={classes.exibindo4De30Opcoes}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>Exibindo 4 de </span>
              <span className={classes.label2}>30 opções</span>
            </p>
          </div>
          <div className={classes.frame49}>
            <div className={classes.ordenarPorRecomendado}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label3}>Ordenar por</span>
                <span className={classes.label4}> Recomendado</span>
              </p>
            </div>
            <Chevron_down
              className={classes.chevron_down}
              swap={{
                vector: <VectorIcon7 className={classes.icon7} />,
              }}
            />
          </div>
        </div>
        <div className={classes.frame80}>
          <div className={classes.frame59}>
            <div className={classes.rectangle3}></div>
            <div className={classes.frame4}>
              <div className={classes.frame50}>
                <div className={classes.frame2}>
                  <div className={classes.quartoSimples}>Quarto Simples</div>
                  <div className={classes.frame55}>
                    <div className={classes.frame73}>
                      <div className={classes.frame72}>
                        <Cafe_FilledTrue
                          className={classes.cafe}
                          swap={{
                            vector: <VectorIcon8 className={classes.icon8} />,
                          }}
                        />
                        <div className={classes.cafeDaManhaInclusoE}>Café da manhã Incluso e +</div>
                      </div>
                      <div className={classes.frame53}></div>
                    </div>
                    <div className={classes.frame57}>
                      <Button_StateDefaultChangeIconN
                        className={classes.button3}
                        classes={{ frame1: classes.frame1 }}
                        text={{
                          button: <div className={classes.button2}>4.2</div>,
                        }}
                      />
                      <div className={classes.muitoBom130Avaliacoes}>
                        <p className={classes.labelWrapper3}>
                          <span className={classes.label5}>Muito Bom</span>
                          <span className={classes.label6}> 130 avaliações</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame51}>
                  <div className={classes.preco}>Preço</div>
                  <div className={classes.r240Noite}>
                    <p className={classes.labelWrapper4}>
                      <span className={classes.label7}>R$240</span>
                      <span className={classes.label8}>/noite</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.rectangle42}></div>
              <div className={classes.frame60}>
                <Button_StateDefaultChangeIconI2
                  classes={{ style_layer: classes.style_layer2 }}
                  swap={{
                    addOutline: (
                      <Heart_FillTrue
                        className={classes.heart}
                        swap={{
                          vector: <VectorIcon9 className={classes.icon9} />,
                        }}
                      />
                    ),
                  }}
                />
                <Button_StateDefaultChangeIconN2
                  className={classes.button5}
                  classes={{ style_layer: classes.style_layer3 }}
                  text={{
                    button: <div className={classes.button4}>Ver Quarto</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame111}>
          <div className={classes.frame592}>
            <div className={classes.rectangle32}></div>
            <div className={classes.frame42}>
              <div className={classes.frame502}>
                <div className={classes.frame22}>
                  <div className={classes.quartoDuplo}>Quarto Duplo</div>
                  <div className={classes.frame552}>
                    <div className={classes.frame732}>
                      <div className={classes.frame722}>
                        <Cafe_FilledTrue
                          className={classes.cafe2}
                          swap={{
                            vector: <VectorIcon10 className={classes.icon10} />,
                          }}
                        />
                        <div className={classes.cafeDaManhaInclusoE2}>Café da manhã Incluso e +</div>
                      </div>
                      <div className={classes.frame532}></div>
                    </div>
                    <div className={classes.frame572}>
                      <Button_StateDefaultChangeIconN
                        className={classes.button7}
                        classes={{ frame1: classes.frame12 }}
                        text={{
                          button: <div className={classes.button6}>4.2</div>,
                        }}
                      />
                      <div className={classes.muitoBom37Avaliacoes}>
                        <p className={classes.labelWrapper5}>
                          <span className={classes.label9}>Muito Bom</span>
                          <span className={classes.label10}> 37 avaliações</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame512}>
                  <div className={classes.preco2}>Preço</div>
                  <div className={classes.r360Noite}>
                    <p className={classes.labelWrapper6}>
                      <span className={classes.label11}>R$360</span>
                      <span className={classes.label12}>/noite</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.rectangle43}></div>
              <div className={classes.frame602}>
                <Button_StateDefaultChangeIconI2
                  classes={{ style_layer: classes.style_layer4 }}
                  swap={{
                    addOutline: (
                      <Heart_FillTrue
                        className={classes.heart2}
                        swap={{
                          vector: <VectorIcon11 className={classes.icon11} />,
                        }}
                      />
                    ),
                  }}
                />
                <Button_StateDefaultChangeIconN2
                  className={classes.button9}
                  classes={{ style_layer: classes.style_layer5 }}
                  text={{
                    button: <div className={classes.button8}>Ver Quarto</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame112}>
          <div className={classes.frame593}>
            <div className={classes.rectangle33}></div>
            <div className={classes.frame43}>
              <div className={classes.frame503}>
                <div className={classes.frame23}>
                  <div className={classes.quartoTriplo}>Quarto Triplo</div>
                  <div className={classes.frame553}>
                    <div className={classes.frame733}>
                      <div className={classes.frame723}>
                        <Cafe_FilledTrue
                          className={classes.cafe3}
                          swap={{
                            vector: <VectorIcon12 className={classes.icon12} />,
                          }}
                        />
                        <div className={classes.cafeDaManhaInclusoE3}>Café da manhã Incluso e +</div>
                      </div>
                      <div className={classes.frame533}></div>
                    </div>
                    <div className={classes.frame573}>
                      <Button_StateDefaultChangeIconN
                        className={classes.button11}
                        classes={{ frame1: classes.frame13 }}
                        text={{
                          button: <div className={classes.button10}>4.2</div>,
                        }}
                      />
                      <div className={classes.muitoBom71Avaliacoes}>
                        <p className={classes.labelWrapper7}>
                          <span className={classes.label13}>Muito Bom</span>
                          <span className={classes.label14}> 71 avaliações</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame513}>
                  <div className={classes.preco3}>Preço</div>
                  <div className={classes.r480Noite}>
                    <p className={classes.labelWrapper8}>
                      <span className={classes.label15}>R$480</span>
                      <span className={classes.label16}>/noite</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.rectangle44}></div>
              <div className={classes.frame603}>
                <Button_StateDefaultChangeIconI2
                  classes={{ style_layer: classes.style_layer6 }}
                  swap={{
                    addOutline: (
                      <Heart_FillTrue
                        className={classes.heart3}
                        swap={{
                          vector: <VectorIcon13 className={classes.icon13} />,
                        }}
                      />
                    ),
                  }}
                />
                <Button_StateDefaultChangeIconN2
                  className={classes.button13}
                  classes={{ style_layer: classes.style_layer7 }}
                  text={{
                    button: <div className={classes.button12}>Ver Quarto</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame113}>
          <div className={classes.frame594}>
            <div className={classes.rectangle34}></div>
            <div className={classes.frame44}>
              <div className={classes.frame504}>
                <div className={classes.frame24}>
                  <div className={classes.suiteMaster}>Suíte Master</div>
                  <div className={classes.frame554}>
                    <div className={classes.frame734}>
                      <div className={classes.frame724}>
                        <Cafe_FilledTrue
                          className={classes.cafe4}
                          swap={{
                            vector: <VectorIcon14 className={classes.icon14} />,
                          }}
                        />
                        <div className={classes.cafeDaManhaInclusoE4}>Café da manhã Incluso e +</div>
                      </div>
                      <div className={classes.frame534}></div>
                    </div>
                    <div className={classes.frame574}>
                      <Button_StateDefaultChangeIconN
                        className={classes.button15}
                        classes={{ frame1: classes.frame14 }}
                        text={{
                          button: <div className={classes.button14}>4.2</div>,
                        }}
                      />
                      <div className={classes.muitoBom31Avaliacoes}>
                        <p className={classes.labelWrapper9}>
                          <span className={classes.label17}>Muito Bom</span>
                          <span className={classes.label18}> 31 avaliações</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.frame514}>
                  <div className={classes.preco4}>Preço</div>
                  <div className={classes.r600Noite}>
                    <p className={classes.labelWrapper10}>
                      <span className={classes.label19}>R$600</span>
                      <span className={classes.label20}>/noite</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={classes.rectangle45}></div>
              <div className={classes.frame604}>
                <Button_StateDefaultChangeIconI2
                  classes={{ style_layer: classes.style_layer8 }}
                  swap={{
                    addOutline: (
                      <Heart_FillTrue
                        className={classes.heart4}
                        swap={{
                          vector: <VectorIcon15 className={classes.icon15} />,
                        }}
                      />
                    ),
                  }}
                />
                <Button_StateDefaultChangeIconN2
                  className={classes.button17}
                  classes={{ style_layer: classes.style_layer9 }}
                  text={{
                    button: <div className={classes.button16}>Ver Quarto</div>,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Button_StateDefaultChangeIconN2
          className={classes.button19}
          classes={{ style_layer: classes.style_layer10 }}
          text={{
            button: <div className={classes.button18}>Exibir mais</div>,
          }}
        />
      </div>
    </div>
  );
});
