import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type PornstarDocument = HydratedDocument<Pornstar>

@Schema()
export class Pornstar {

    @Prop({required: true, unique: true})
    name: string

    @Prop({required: true})
    img: string

    @Prop()
    videos: number

    @Prop()
    relation: string

    @Prop()
    city: string

    @Prop()
    carrer: string
    
    @Prop()
    sex: string

    @Prop()
    horoscope: string
    
    @Prop()
    etnia: string

    @Prop()
    ranking: number

}

export const PornstarSchema = SchemaFactory.createForClass(Pornstar)