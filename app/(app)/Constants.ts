export const blogs = {
  id: 1,
  blog_title: "Exploring Kafka: A Beginner's Guide to Real-Time Data Streaming",
  slug: "beginners-guide-to-apache-kafka",

  blog_content: {
    root: {
      type: "root",
      format: "",
      indent: 0,
      version: 1,

      children: [
        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications. Originally developed by LinkedIn, Kafka is designed to handle large volumes of data in a fault-tolerant and scalable manner.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          tag: "h3",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Core Concepts",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "1. Topics:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "In Kafka, data is organized into topics, which are essentially feeds of messages. Each message in a topic is identified by a unique offset. Topics can be partitioned to enable parallel processing and scalability.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "2. Producers:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Producers are responsible for publishing messages to Kafka topics. They write data to the end of a topic, and Kafka ensures that messages are sequentially ordered within each partition.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "3. Consumers:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Consumers read messages from Kafka topics. They can subscribe to one or more topics and process messages in real-time. Kafka allows multiple consumers to read from the same topic simultaneously, providing fault tolerance and scalability.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "4. Brokers:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Kafka brokers are servers responsible for storing and replicating data. They manage the storage and retrieval of messages, ensuring fault tolerance and high availability. A Kafka cluster typically consists of multiple brokers working together.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h4",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "5. Streams:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Kafka Streams is a client library for building real-time streaming applications. It allows developers to process and transform data streams directly within Kafka, enabling powerful stream processing applications.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h3",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Getting Started",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "To begin working with Kafka, you'll need to set up a Kafka cluster and start experimenting with producers, consumers, and topics. The Kafka documentation provides detailed instructions for installation and configuration.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "h3",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Use Cases",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Kafka is widely used in various industries for real-time data processing, including:",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          tag: "ul",
          type: "list",
          start: 1,
          format: "",
          indent: 0,
          version: 1,

          children: [
            {
              type: "listitem",
              value: 1,
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: "Log Aggregation",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
                  version: 1,
                },

                {
                  mode: "normal",
                  text: ": Collecting and centralizing log data from multiple sources.",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: "ltr",
            },

            {
              type: "listitem",
              value: 2,
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: "Metrics Monitoring",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
                  version: 1,
                },

                {
                  mode: "normal",
                  text: ": Real-time monitoring of system metrics and performance data.",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: "ltr",
            },

            {
              type: "listitem",
              value: 3,
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: "Event Sourcing",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
                  version: 1,
                },

                {
                  mode: "normal",
                  text: ": Capturing and storing event data for analysis and auditing purposes.",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: "ltr",
            },

            {
              type: "listitem",
              value: 4,
              format: "",
              indent: 0,
              version: 1,

              children: [
                {
                  mode: "normal",
                  text: "Stream Processing",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 1,
                  version: 1,
                },

                {
                  mode: "normal",
                  text: ": Analyzing and transforming data streams in real-time.",
                  type: "text",
                  style: "",
                  detail: 0,
                  format: 0,
                  version: 1,
                },
              ],
              direction: "ltr",
            },
          ],
          listType: "bullet",
          direction: "ltr",
        },

        {
          tag: "h3",
          type: "heading",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Conclusion",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "Apache Kafka is a powerful tool for building real-time data streaming applications. By understanding its core concepts and features, you can leverage Kafka to build scalable and fault-tolerant data pipelines for your projects.",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },

        {
          type: "paragraph",
          format: "start",
          indent: 0,
          version: 1,

          children: [
            {
              mode: "normal",
              text: "In future posts, we'll explore advanced topics such as Kafka Connect, Kafka Streams, and best practices for deploying Kafka in production environments. Stay tuned for more insights into the world of Kafka!",
              type: "text",
              style: "",
              detail: 0,
              format: 0,
              version: 1,
            },
          ],
          direction: "ltr",
          textFormat: 0,
        },
      ],
      direction: "ltr",
    },
  },

  category: {
    id: 1,
    blog_category_name: "Tech",
    updatedAt: "2024-05-09T18:10:34.785Z",
    createdAt: "2024-05-09T18:10:34.785Z",
  },

  featured_image: {
    id: 1,
    alt: null,
    updatedAt: "2024-05-09T18:10:10.326Z",
    createdAt: "2024-05-09T18:10:10.326Z",
    url: "/rectangle-245@2x.png",
    thumbnailURL: null,
    filename: "fh.png",
    mimeType: "image/png",
    filesize: 1243992,
    width: 1754,
    height: 855,

    sizes: {
      thumbnail: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
      },

      card: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
      },

      tablet: {
        url: null,
        width: null,
        height: null,
        mimeType: null,
        filesize: null,
        filename: null,
      },
    },
  },
  updatedAt: "2024-05-10T15:05:12.686Z",
  createdAt: "2024-05-09T18:10:40.037Z",
  _status: "published",
};

export const events = [
  {
    slug: "event-1",
    admin: {
      useAsTitle: "First Event Title",
    },
    fields: {
      event_title: "First Event Title",
      slug: "event-1",
      blog_content: "This is the content of the first event.",
      category: "Conference",
      featured_image: "https://example.com/image1.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-2",
    admin: {
      useAsTitle: "Second Event Title",
    },
    fields: {
      event_title: "Second Event Title",
      slug: "event-2",
      blog_content: "This is the content of the second event.",
      category: "Workshop",
      featured_image: "https://example.com/image2.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-3",
    admin: {
      useAsTitle: "Third Event Title",
    },
    fields: {
      event_title: "Third Event Title",
      slug: "event-3",
      blog_content: "This is the content of the third event.",
      category: "Seminar",
      featured_image: "https://example.com/image3.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-4",
    admin: {
      useAsTitle: "Fourth Event Title",
    },
    fields: {
      event_title: "Fourth Event Title",
      slug: "event-4",
      blog_content: "This is the content of the fourth event.",
      category: "Exhibition",
      featured_image: "https://example.com/image4.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-5",
    admin: {
      useAsTitle: "Fifth Event Title",
    },
    fields: {
      event_title: "Fifth Event Title",
      slug: "event-5",
      blog_content: "This is the content of the fifth event.",
      category: "Networking",
      featured_image: "https://example.com/image5.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-6",
    admin: {
      useAsTitle: "Sixth Event Title",
    },
    fields: {
      event_title: "Sixth Event Title",
      slug: "event-6",
      blog_content: "This is the content of the sixth event.",
      category: "Training",
      featured_image: "https://example.com/image6.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-7",
    admin: {
      useAsTitle: "Seventh Event Title",
    },
    fields: {
      event_title: "Seventh Event Title",
      slug: "event-7",
      blog_content: "This is the content of the seventh event.",
      category: "Symposium",
      featured_image: "https://example.com/image7.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-8",
    admin: {
      useAsTitle: "Eighth Event Title",
    },
    fields: {
      event_title: "Eighth Event Title",
      slug: "event-8",
      blog_content: "This is the content of the eighth event.",
      category: "Convention",
      featured_image: "https://example.com/image8.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-9",
    admin: {
      useAsTitle: "Ninth Event Title",
    },
    fields: {
      event_title: "Ninth Event Title",
      slug: "event-9",
      blog_content: "This is the content of the ninth event.",
      category: "Hackathon",
      featured_image: "https://example.com/image9.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
  {
    slug: "event-10",
    admin: {
      useAsTitle: "Tenth Event Title",
    },
    fields: {
      event_title: "Tenth Event Title",
      slug: "event-10",
      blog_content: "This is the content of the tenth event.",
      category: "Concert",
      featured_image: "https://example.com/image10.jpg",
    },
    versions: {
      drafts: true,
      maxPerDoc: 25,
    },
  },
];
