const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600 // 1 hour
    }
});

// ✅ Use existing model if already compiled to avoid OverwriteModelError
module.exports = mongoose.models.BlacklistToken || mongoose.model('BlacklistToken', blacklistTokenSchema);