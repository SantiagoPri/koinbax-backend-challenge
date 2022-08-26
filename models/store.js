const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuit: { type: String, required: true },
  concepts: { type: Array, required: true },
  currentBalance: { type: Number, required: true },
  active: { type: Boolean, required: true },
  lastSale: { type: Date, required: true },
},{ timestamps: true });

StoreSchema.pre('save', async function (callback) {
  //completar de ser necesario
});

module.exports = mongoose.model('Store', StoreSchema);
