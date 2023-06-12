import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Breakfast_BreatfastTrue } from './Breakfast_BreatfastTrue/Breakfast_BreatfastTrue';
import { Button_StateDefaultChangeIconI2 } from './Button_StateDefaultChangeIconI2/Button_StateDefaultChangeIconI2';
import { Button_StateDefaultChangeIconI } from './Button_StateDefaultChangeIconI/Button_StateDefaultChangeIconI';
import { Button_StateDefaultChangeIconN2 } from './Button_StateDefaultChangeIconN2/Button_StateDefaultChangeIconN2';
import { Button_StateDefaultChangeIconN } from './Button_StateDefaultChangeIconN/Button_StateDefaultChangeIconN';
import { Calendar_FillTrue } from './Calendar_FillTrue/Calendar_FillTrue';
import { Chevron_down } from './Chevron_down/Chevron_down';
import { Chevron_forward } from './Chevron_forward/Chevron_forward';
import { Component24_Property1IonBed } from './Component24_Property1IonBed/Component24_Property1IonBed';
import { Component25 } from './Component25/Component25';
import { Ellipse1Icon } from './Ellipse1Icon';
import { Ellipse1Icon2 } from './Ellipse1Icon2';
import { Ellipse1Icon3 } from './Ellipse1Icon3';
import { Ellipse1Icon4 } from './Ellipse1Icon4';
import { Ellipse1Icon5 } from './Ellipse1Icon5';
import { Flag_FlagTrue } from './Flag_FlagTrue/Flag_FlagTrue';
import { Heart_FillFalse } from './Heart_FillFalse/Heart_FillFalse';
import { IcRoundRestaurantIcon } from './IcRoundRestaurantIcon';
import { IonWineIcon } from './IonWineIcon';
import { MakiFitnessCentreIcon } from './MakiFitnessCentreIcon';
import { MaterialSymbolsRoomServiceRoun } from './MaterialSymbolsRoomServiceRoun';
import { MaterialSymbolsSpaRoundedIcon } from './MaterialSymbolsSpaRoundedIcon';
import { MdiPoolIcon } from './MdiPoolIcon';
import { MdiPoolIcon2 } from './MdiPoolIcon2';
import classes from './Reserva.module.css';
import { Search_FillTrue } from './Search_FillTrue/Search_FillTrue';
import { Share_ShareTrue } from './Share_ShareTrue/Share_ShareTrue';
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
import { Wifi_WifiTrue } from './Wifi_WifiTrue/Wifi_WifiTrue';

interface Props {
  className?: string;
  hide?: {
    supportingText?: boolean;
    supportingText2?: boolean;
    supportingText3?: boolean;
    supportingText4?: boolean;
  };
}
/* @figmaId 28:1604 */
export const Reserva: FC<Props> = memo(function Reserva(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Component25 className={classes.component25} />
      <div className={classes.frame149}>
        <div className={classes.rectangle4}></div>
        <div className={classes.frame147}>
          <div className={classes.frame146}>
            <div className={classes.descricao}>Descrição</div>
            <div className={classes.oQuartoDeHotelComVistaParaOMar}>
              O quarto de hotel com vista para o mar é simplesmente deslumbrante. A partir da varanda, podemos ver a
              imensidão do oceano e sentir a brisa do mar em nossa pele. A decoração é moderna e elegante, com tons
              suaves que combinam perfeitamente com a vista panorâmica. A cama é extremamente confortável e espaçosa,
              com roupa de cama macia e edredom aconchegante. Há um sofá ou poltrona confortável na área de estar,
              perfeito para relaxar e apreciar a vista. O quarto está equipado com todas as comodidades modernas,
              incluindo ar condicionado, TV de tela plana, minibar e máquina de café. O banheiro é espaçoso e bem
              iluminado, com toalhas macias e produtos de banho de alta qualidade. Este quarto de hotel é o lugar
              perfeito para se desligar do mundo e desfrutar de um cenário incrível.
            </div>
          </div>
        </div>
        <div className={classes.rectangle7}></div>
        <div className={classes.frame165}>
          <div className={classes.opcoes}>Opções</div>
          <div className={classes.frame167}>
            <div className={classes.frame164}>
              <div className={classes.frame162}>
                <div className={classes.mdiPool}>
                  <MdiPoolIcon className={classes.icon16} />
                </div>
                <div className={classes.piscinaExterna}>Piscina Externa</div>
              </div>
              <div className={classes.frame163}>
                <div className={classes.mdiPool2}>
                  <MdiPoolIcon2 className={classes.icon17} />
                </div>
                <div className={classes.banheira}>Banheira</div>
              </div>
              <div className={classes.frame1642}>
                <div className={classes.materialSymbolsSpaRounded}>
                  <MaterialSymbolsSpaRoundedIcon className={classes.icon18} />
                </div>
                <div className={classes.spa}>Spa </div>
              </div>
              <div className={classes.frame1652}>
                <div className={classes.icRoundRestaurant}>
                  <IcRoundRestaurantIcon className={classes.icon19} />
                </div>
                <div className={classes.restaurante}>Restaurante</div>
              </div>
              <div className={classes.frame166}>
                <div className={classes.materialSymbolsRoomServiceRoun}>
                  <MaterialSymbolsRoomServiceRoun className={classes.icon20} />
                </div>
                <div className={classes.servicoDeQuarto}>Serviço de Quarto</div>
              </div>
            </div>
            <div className={classes.frame1653}>
              <div className={classes.frame1622}>
                <div className={classes.makiFitnessCentre}>
                  <MakiFitnessCentreIcon className={classes.icon21} />
                </div>
                <div className={classes.academia}>Academia</div>
              </div>
              <div className={classes.frame1632}>
                <div className={classes.ionWine}>
                  <IonWineIcon className={classes.icon22} />
                </div>
                <div className={classes.bar}>Bar</div>
              </div>
              <div className={classes.frame1643}>
                <Wifi_WifiTrue />
                <div className={classes.wiFiGratis}> Wi-Fi Grátis</div>
              </div>
              <div className={classes.frame1654}>
                <Breakfast_BreatfastTrue />
                <div className={classes.maquinaDeCafe}>máquina de café</div>
              </div>
              <div className={classes._24Opcoes}>+24 opções</div>
            </div>
          </div>
        </div>
        <div className={classes.rectangle8}></div>
        <div className={classes.frame171}>
          <div className={classes.frame180}>
            <div className={classes.frame160}>
              <div className={classes.avaliacoes}>Avaliações</div>
              <Button_StateDefaultChangeIconN
                classes={{ style_layer: classes.style_layer }}
                text={{
                  button: <div className={classes.button}>Faça sua avaliação</div>,
                }}
              />
            </div>
            <div className={classes.frame168}>
              <div className={classes._42}>4.2</div>
              <div className={classes.frame169}>
                <div className={classes.muitoBom}>Muito bom</div>
                <div className={classes._37Avaliacoes}>37 avaliações</div>
              </div>
            </div>
          </div>
          <div className={classes.rectangle9}></div>
          <div className={classes.frame174}>
            <div className={classes.frame172}>
              <div className={classes.ellipse1}>
                <Ellipse1Icon className={classes.icon23} />
              </div>
              <div className={classes.frame173}>
                <div className={classes.frame178}>
                  <div className={classes._5Maravilhoso}>5.0 Maravilhoso</div>
                  <div className={classes.unnamed}>|</div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <Flag_FlagTrue
                className={classes.flag}
                swap={{
                  vector: <VectorIcon className={classes.icon} />,
                }}
              />
            </div>
            <div className={classes.rectangle10}></div>
            <div className={classes.frame1732}>
              <div className={classes.ellipse12}>
                <Ellipse1Icon2 className={classes.icon24} />
              </div>
              <div className={classes.frame1733}>
                <div className={classes.frame1782}>
                  <div className={classes._5Maravilhoso2}>5.0 Maravilhoso</div>
                  <div className={classes.unnamed2}>|</div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <Flag_FlagTrue
                className={classes.flag2}
                swap={{
                  vector: <VectorIcon2 className={classes.icon2} />,
                }}
              />
            </div>
            <div className={classes.rectangle11}></div>
            <div className={classes.frame1742}>
              <div className={classes.ellipse13}>
                <Ellipse1Icon3 className={classes.icon25} />
              </div>
              <div className={classes.frame1734}>
                <div className={classes.frame1783}>
                  <div className={classes._5Maravilhoso3}>5.0 Maravilhoso</div>
                  <div className={classes.unnamed3}>|</div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <Flag_FlagTrue
                className={classes.flag3}
                swap={{
                  vector: <VectorIcon3 className={classes.icon3} />,
                }}
              />
            </div>
            <div className={classes.rectangle12}></div>
            <div className={classes.frame175}>
              <div className={classes.ellipse14}>
                <Ellipse1Icon4 className={classes.icon26} />
              </div>
              <div className={classes.frame1735}>
                <div className={classes.frame1784}>
                  <div className={classes._5Maravilhoso4}>5.0 Maravilhoso</div>
                  <div className={classes.unnamed4}>|</div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <Flag_FlagTrue
                className={classes.flag4}
                swap={{
                  vector: <VectorIcon4 className={classes.icon4} />,
                }}
              />
            </div>
            <div className={classes.rectangle13}></div>
            <div className={classes.frame176}>
              <div className={classes.ellipse15}>
                <Ellipse1Icon5 className={classes.icon27} />
              </div>
              <div className={classes.frame1736}>
                <div className={classes.frame1785}>
                  <div className={classes._5Maravilhoso5}>5.0 Maravilhoso</div>
                  <div className={classes.unnamed5}>|</div>
                </div>
                <div className={classes.loremIpsumDolorSitAmetConsecte5}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </div>
              </div>
              <Flag_FlagTrue
                className={classes.flag5}
                swap={{
                  vector: <VectorIcon5 className={classes.icon5} />,
                }}
              />
            </div>
            <div className={classes.rectangle14}></div>
            <div className={classes.frame179}>
              <Chevron_forward
                className={classes.chevron_forward}
                swap={{
                  vector: <VectorIcon6 className={classes.icon6} />,
                }}
              />
              <div className={classes._1Of40}>1 of 40</div>
              <Chevron_forward
                swap={{
                  vector: <VectorIcon7 className={classes.icon7} />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame125}>
        <div className={classes.rectangle542}></div>
        <div className={classes.frame128}>
          <div className={classes.frame126}>
            <div className={classes.rectangle545}></div>
            <div className={classes.rectangle546}></div>
          </div>
          <div className={classes.frame127}>
            <div className={classes.rectangle547}></div>
            <div className={classes.rectangle548}></div>
            <Button_StateDefaultChangeIconN
              classes={{ style_layer: classes.style_layer2 }}
              text={{
                button: <div className={classes.button2}>Ver todas as fotos</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.frame136}>
        <div className={classes.frame124}>
          <div className={classes.frame123}>
            <div className={classes.quartoDuplo}>Quarto Duplo</div>
          </div>
          <div className={classes.frame129}>
            <div className={classes.frame57}>
              <Button_StateDefaultChangeIconN2
                className={classes.button4}
                classes={{ frame1: classes.frame1 }}
                text={{
                  button: <div className={classes.button3}>4.2</div>,
                }}
              />
              <div className={classes.muitoBom37Avaliacoes}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>Muito bom</span>
                  <span className={classes.label2}> 37 avaliações</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame135}>
          <div className={classes.r240Noite}>
            <p className={classes.labelWrapper2}>
              <span className={classes.label3}>R$240</span>
              <span className={classes.label4}>/noite</span>
            </p>
          </div>
          <div className={classes.frame134}>
            <Button_StateDefaultChangeIconI
              classes={{ style_layer: classes.style_layer3 }}
              swap={{
                addOutline: (
                  <Heart_FillFalse
                    className={classes.heart}
                    swap={{
                      vector: <VectorIcon8 className={classes.icon8} />,
                    }}
                  />
                ),
              }}
            />
            <Button_StateDefaultChangeIconI
              classes={{ style_layer: classes.style_layer4 }}
              swap={{
                addOutline: (
                  <Share_ShareTrue
                    className={classes.share}
                    swap={{
                      vector: <VectorIcon9 className={classes.icon9} />,
                    }}
                  />
                ),
              }}
            />
            <Button_StateDefaultChangeIconN
              className={classes.button6}
              classes={{ style_layer: classes.style_layer5 }}
              text={{
                button: <div className={classes.button5}>Reservar agora</div>,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes.reserva}>
        <div className={classes.frame40}>
          <TextField_StyleOutlinedStateEn
            className={classes.textField}
            swap={{
              iconsSearch_24px: (
                <Component24_Property1IonBed
                  swap={{
                    vector: <VectorIcon10 className={classes.icon10} />,
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
                    vector: <VectorIcon11 className={classes.icon11} />,
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
                    vector: <VectorIcon12 className={classes.icon12} />,
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
                    vector: <VectorIcon13 className={classes.icon13} />,
                  }}
                />
              ),
              chevronDown: (
                <Chevron_down
                  swap={{
                    vector: <VectorIcon14 className={classes.icon14} />,
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
          <Button_StateDefaultChangeIconI2
            className={classes.button7}
            classes={{ style_layer: classes.style_layer6 }}
            swap={{
              addOutline: (
                <Search_FillTrue
                  swap={{
                    vector: <VectorIcon15 className={classes.icon15} />,
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
      <div className={classes.rectangle42}></div>
      <div className={classes.pT}>PT</div>
      <div className={classes.vector1}>
        <Vector1Icon className={classes.icon28} />
      </div>
      <div className={classes.lOGO}>LUXOR</div>
    </div>
  );
});
