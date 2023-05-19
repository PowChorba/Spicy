import { Prop,Schema,SchemaFactory} from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type CategoryDocument = HydratedDocument<Search>

@Schema()
export class Search {
    @Prop({required: true})
    word: string

    @Prop({required: true})
    counter: number
}

export const SearchSchema = SchemaFactory.createForClass(Search)