import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'statusBadgeText',
      title: 'Status Badge Text',
      type: 'string',
      initialValue: '6/6 Production Systems Monitored & Live',
    }),
    defineField({
      name: 'headingPrefix',
      title: 'Heading Prefix',
      type: 'string',
      initialValue: 'High-Performance',
    }),
    defineField({
      name: 'headingHighlight',
      title: 'Heading Highlight (Gold)',
      type: 'string',
      initialValue: 'WordPress',
    }),
    defineField({
      name: 'headingSuffix',
      title: 'Heading Suffix',
      type: 'string',
      initialValue: '& Cloud Systems.',
    }),
    defineField({
      name: 'paragraph',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 4,
      initialValue:
        'Replacing bloated plugins with lightweight custom PHP, orchestrating zero-downtime server migrations between Hostinger and Cloudflare edge layers, and automating Linux root operations.',
    }),
    defineField({
      name: 'primaryBtnText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'Explore Live Systems →',
    }),
    defineField({
      name: 'primaryBtnUrl',
      title: 'Primary Button Anchor/URL',
      type: 'string',
      initialValue: '#projects',
    }),
    defineField({
      name: 'secondaryBtnText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Hire On Upwork',
    }),
    defineField({
      name: 'secondaryBtnUrl',
      title: 'Secondary Button URL',
      type: 'url',
      initialValue: 'https://www.upwork.com',
    }),
    defineField({
      name: 'terminalTabs',
      title: 'Terminal Telemetry Tabs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'tabId', title: 'Tab ID (slug)', type: 'string' }),
            defineField({ name: 'tabLabel', title: 'Tab Label', type: 'string' }),
            defineField({
              name: 'lines',
              title: 'Terminal Content Lines',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'type',
                      title: 'Line Type',
                      type: 'string',
                      options: {
                        list: [
                          { title: 'Command Prompt ($)', value: 'command' },
                          { title: 'Regular Output Text', value: 'output' },
                          { title: 'Status Badge Output', value: 'status' },
                          { title: 'Blank Spacer Line', value: 'blank' },
                        ],
                      },
                    }),
                    defineField({ name: 'text', title: 'Line Text', type: 'string' }),
                    defineField({
                      name: 'badgeText',
                      title: 'Status Badge (Green)',
                      type: 'string',
                      description: 'Used when Line Type is "Status Badge Output"',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
      initialValue: [
        {
          tabId: 'wp-cli',
          tabLabel: 'wp-cli.sh',
          lines: [
            { type: 'command', text: 'wp --info && check_mesh_status' },
            { type: 'output', text: 'OS: Linux Ubuntu 22.04 LTS (x86_64)' },
            { type: 'status', text: 'Origin: Hostinger Origin Infrastructure', badgeText: '[HARDENED]' },
            { type: 'output', text: 'Security: Grade-A HTTP Security Headers Verified' },
            { type: 'output', text: 'SEO Engine: Native Social Graph PHP Active Across All 6 Sites' },
            { type: 'blank', text: '' },
            { type: 'command', text: 'verify_custom_code' },
            { type: 'status', text: '[✓] Custom Checkout (Proof Upload):', badgeText: 'ACTIVE' },
            { type: 'status', text: '[✓] Social Proof Popup Engine:', badgeText: 'RUNNING' },
          ],
        },
        {
          tabId: 'cloudflare',
          tabLabel: 'edge-routing.cf',
          lines: [
            { type: 'command', text: 'cloudflare-cli --zone-verify --all' },
            { type: 'output', text: 'Edge Proxy: Cloudflare Enterprise Anycast CDN' },
            { type: 'output', text: 'SSL/TLS: Strict (End-to-End Encryption)' },
            { type: 'status', text: 'Migration Downtime:', badgeText: '0.00 Seconds (Active Proxy)' },
            { type: 'blank', text: '' },
            { type: 'command', text: 'edge-cache-purge --smart' },
            { type: 'status', text: '[✓] Edge Cache Revalidated:', badgeText: '100% OK' },
          ],
        },
        {
          tabId: 's3-cron',
          tabLabel: 's3-cron.bash',
          lines: [
            { type: 'command', text: 'cat /etc/cron.daily/s3_backup.sh' },
            { type: 'output', text: 'Target: s3://production-vault/backups/' },
            { type: 'output', text: 'MySQL Dump: Compressed GZ + AES-256' },
            { type: 'output', text: 'Automated Update: Verified Plugin Core Health' },
            { type: 'blank', text: '' },
            { type: 'command', text: 'aws s3 ls --human-readable' },
            { type: 'status', text: '[✓] Backup Status:', badgeText: 'SYNCHRONIZED DAILY' },
          ],
        },
      ],
    }),
  ],
})
