import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type PornstarDocument = HydratedDocument<Pornstar>

@Schema()
export class Pornstar {

    @Prop({required: true})
    name: string

    @Prop({required: true})
    img: string

    @Prop()
    videos: number
}

export const PornstarSchema = SchemaFactory.createForClass(Pornstar)