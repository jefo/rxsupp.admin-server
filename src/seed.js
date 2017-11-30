import seeder from 'mongoose-seed';

export default () => {
    // Data array containing seed data - documents organized by Model
    const seedData = [
        {
            'model': 'User',
            'documents': [
                {
                    'login': 'ojoe@gmail.com',
                    'password': '123'
                },
                {
                    'login': 'onick@gmail.com',
                    'password': '123'
                }
            ]
        }
    ];

    // Connect to MongoDB via Mongoose
    seeder.connect('mongodb://localhost/rxsupp', function () {

        // Load Mongoose models
        seeder.loadModels([
            'src/User.js'
        ]);

        // Clear specified collections
        seeder.clearModels(['User'], function () {

            // Callback to populate DB once collections have been cleared
            seeder.populateModels(data, function () {
                seeder.disconnect();
            });
        });
    });
}

