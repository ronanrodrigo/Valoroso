import React from 'react';
import {ColorValue} from 'react-native'
import Acura from './acura.svg'
import AlfaRomeo from './alfa romeo.svg'
import AmGeneral from './am general.svg'
import AstonMartin from './aston martin.svg'
import Audi from './audi.svg'
import Bentley from './bentley.svg'
import Bmw from './bmw.svg'
import Bugatti from './bugatti.svg'
import Buick from './buick.svg'
import Cadillac from './cadillac.svg'
import Chevrolet from './chevrolet.svg'
import Chrysler from './chrysler.svg'
import Citroen from './citroen.svg'
import Dacia from './dacia.svg'
import Daewoo from './daewoo.svg'
import Default from './default.svg'
import Dodge from './dodge.svg'
import Eagle from './eagle.svg'
import Ferrari from './ferrari.svg'
import Fiat from './fiat.svg'
import Fisker from './fisker.svg'
import Ford from './ford.svg'
import Genesis from './genesis.svg'
import Geo from './geo.svg'
import Gmc from './gmc.svg'
import Honda from './honda.svg'
import Hummer from './hummer.svg'
import Hyundai from './hyundai.svg'
import Infiniti from './infiniti.svg'
import Isuzu from './isuzu.svg'
import Jaguar from './jaguar.svg'
import Jeep from './jeep.svg'
import Kia from './kia.svg'
import Lamborghini from './lamborghini.svg'
import LandRover from './land rover.svg'
import Lexus from './lexus.svg'
import Lincoln from './lincoln.svg'
import Lotus from './lotus.svg'
import Maserati from './maserati.svg'
import Maybach from './maybach.svg'
import Mazda from './mazda.svg'
import Mclaren from './mclaren.svg'
import MercedesBenz from './mercedes benz.svg'
import Mercury from './mercury.svg'
import Mini from './mini.svg'
import Mitsubishi from './mitsubishi.svg'
import Nissan from './nissan.svg'
import Oldsmobile from './oldsmobile.svg'
import Opel from './opel.svg'
import Panoz from './panoz.svg'
import Peugeot from './peugeot.svg'
import Plymouth from './plymouth.svg'
import Pontiac from './pontiac.svg'
import Porsche from './porsche.svg'
import Ram from './ram.svg'
import Renault from './renault.svg'
import RollsRoyce from './rolls royce.svg'
import Saturn from './saturn.svg'
import Scion from './scion.svg'
import Seat from './seat.svg'
import Skoda from './skoda.svg'
import Smart from './smart.svg'
import Spyker from './spyker.svg'
import Subaru from './subaru.svg'
import Suzuki from './suzuki.svg'
import Tesla from './tesla.svg'
import Toyota from './toyota.svg'
import Volkswagen from './volkswagen.svg'
import Volvo from './volvo.svg'

type IconProps = {
    name: string
    fill: ColorValue
}
export const Icon = ({name, fill}: IconProps) => {
    const icons: Record<string, JSX.Element> = {
        acura: <Acura fill={fill} />,
        alfa_romeo: <AlfaRomeo fill={fill} />,
        am_general: <AmGeneral fill={fill} />,
        aston_martin: <AstonMartin fill={fill} />,
        audi: <Audi fill={fill} />,
        bentley: <Bentley fill={fill} />,
        bmw: <Bmw fill={fill} />,
        bugatti: <Bugatti fill={fill} />,
        buick: <Buick fill={fill} />,
        cadillac: <Cadillac fill={fill} />,
        chevrolet: <Chevrolet fill={fill} />,
        chrysler: <Chrysler fill={fill} />,
        citroen: <Citroen fill={fill} />,
        dacia: <Dacia fill={fill} />,
        daewoo: <Daewoo fill={fill} />,
        default: <Default fill={fill} />,
        dodge: <Dodge fill={fill} />,
        eagle: <Eagle fill={fill} />,
        ferrari: <Ferrari fill={fill} />,
        fiat: <Fiat fill={fill} />,
        fisker: <Fisker fill={fill} />,
        ford: <Ford fill={fill} />,
        genesis: <Genesis fill={fill} />,
        geo: <Geo fill={fill} />,
        gmc: <Gmc fill={fill} />,
        honda: <Honda fill={fill} />,
        hummer: <Hummer fill={fill} />,
        hyundai: <Hyundai fill={fill} />,
        infiniti: <Infiniti fill={fill} />,
        isuzu: <Isuzu fill={fill} />,
        jaguar: <Jaguar fill={fill} />,
        jeep: <Jeep fill={fill} />,
        kia: <Kia fill={fill} />,
        lamborghini: <Lamborghini fill={fill} />,
        land_rover: <LandRover fill={fill} />,
        lexus: <Lexus fill={fill} />,
        lincoln: <Lincoln fill={fill} />,
        lotus: <Lotus fill={fill} />,
        maserati: <Maserati fill={fill} />,
        maybach: <Maybach fill={fill} />,
        mazda: <Mazda fill={fill} />,
        mclaren: <Mclaren fill={fill} />,
        mercedes_benz: <MercedesBenz fill={fill} />,
        mercury: <Mercury fill={fill} />,
        mini: <Mini fill={fill} />,
        mitsubishi: <Mitsubishi fill={fill} />,
        nissan: <Nissan fill={fill} />,
        oldsmobile: <Oldsmobile fill={fill} />,
        opel: <Opel fill={fill} />,
        panoz: <Panoz fill={fill} />,
        peugeot: <Peugeot fill={fill} />,
        plymouth: <Plymouth fill={fill} />,
        pontiac: <Pontiac fill={fill} />,
        porsche: <Porsche fill={fill} />,
        ram: <Ram fill={fill} />,
        renault: <Renault fill={fill} />,
        rolls_royce: <RollsRoyce fill={fill} />,
        saturn: <Saturn fill={fill} />,
        scion: <Scion fill={fill} />,
        seat: <Seat fill={fill} />,
        skoda: <Skoda fill={fill} />,
        smart: <Smart fill={fill} />,
        spyker: <Spyker fill={fill} />,
        subaru: <Subaru fill={fill} />,
        suzuki: <Suzuki fill={fill} />,
        tesla: <Tesla fill={fill} />,
        toyota: <Toyota fill={fill} />,
        volkswagen: <Volkswagen fill={fill} />,
        volvo: <Volvo fill={fill} />,
    }
    return icons[name]
}
