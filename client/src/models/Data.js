import mongoose from "mongoose";

const {Schema} = mongoose;

const dataSchema = new Schema({
      value: {
        type: String,
        required: true,
      },
      item: {
        type: String,
        required: true,
      }
})

export default mongoose.models.Data ||
  mongoose.model("Data", dataSchema);