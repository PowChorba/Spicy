import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type CategoryDocument = HydratedDocument<Category>

@Schema()
export class Category {
    @Prop({auto: true})
    id:number

    @Prop({required: true})
    name: string

    @Prop({required: true})
    idCategory: number

    @Prop({required: true})
    img: string

    @Prop()
    counter: number
}

export const CategorySchema = SchemaFactory.createForClass(Category)