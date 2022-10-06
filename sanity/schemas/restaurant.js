export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant Name',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'short_description',
      type: 'string',
      title: 'Short Description',
      validation: (Rule) => Rule.max(200),
    },

    {
      name: 'image',
      type: 'image',
      title: 'Image of the Restaurant',
    },

    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },

    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },

    {
      name: 'address',
      type: 'string',
      title: 'Restaurant Address',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'rating',
      type: 'number',
      title: 'Enter a Rating from (1-5 stars)',
      validation: (Rule) => 
          Rule.required()
          .min(1)
          .max(5)
          .error('please enter a value between 1 and 5'),
    },

    {
      name: 'type',
      type: 'reference',
      to: [{type: 'category'}],
      title: 'Category',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
      validation: (Rule) => Rule.required(),
    },
    
  ],
}
