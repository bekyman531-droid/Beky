document.addEventListener('alpine:init', () => {
    Alpine.data('bekyApp', () => ({
        // Live counters data
        usersOnline: 1247,
        totalDeposits: 48576,
        rewardsPaid: 38924,
        
        // Modal states
        showTelegramModal: false,
        showChat: false,
        
        // TON and referral data
        tonAddress: 'EQDk2VP2A_fNqy8t9YpBdJHqL3XzG_5mK7J9Q8rXsYvTnWb',
        userId: '12345',
        
        // Chat data
        newMessage: '',
        chatMessages: [
            { id: 1, sender: 'support', text: 'Hello! How can I help you today?' },
            { id: 2, sender: 'support', text: 'Feel free to ask any questions about earning crypto with Beky!' }
        ],
        
        // Floating coins
        floatingCoins: [],
        
        // Testimonials
        testimonials: [
            {
                name: 'Alex Johnson',
                date: '2 days ago',
                text: 'Beky has completely changed my financial situation. I earn consistent passive income every single day!'
            },
            {
                name: 'Sarah Chen',
                date: '1 week ago',
                text: 'The best platform I\'ve used. Fast withdrawals and great support. Highly recommend!'
            },
            {
                name: 'Mike Rodriguez',
                date: '2 weeks ago',
                text: 'Started with just $100 and now earning daily. The referral program is amazing too!'
            },
            {
                name: 'Emma Wilson',
                date: '3 weeks ago',
                text: 'Secure, reliable, and profitable. What more could you ask for? Beky delivers on all promises.'
            },
            {
                name: 'David Kim',
                date: '1 month ago',
                text: 'Been using Beky for 6 months now. The consistency of earnings is impressive. Great platform!'
            }
        ],
        currentTestimonial: 0,
        
        // Leaderboard data
        leaderboard: [
            { name: 'CryptoKing', earned: 125430 },
            { name: 'DiamondHands', earned: 98750 },
            { name: 'MoonShot', earned: 87620 },
            { name: 'WhaleTrader', earned: 76540 },
            { name: 'StonksGuru', earned: 65430 },
            { name: 'ProfitMax', earned: 54320 },
            { name: 'BullRun', earned: 43210 },
            { name: 'ToTheMoon', earned: 32100 }
        ],
        
        // Initialize
        init() {
            this.startCounters();
            this.initFloatingCoins();
            this.startTestimonialAutoScroll();
            this.initTelegramModal();
            this.detectTelegramBrowser();
        },
        
        // Live counters with smooth animation
        startCounters() {
            setInterval(() => {
                // Animate users online
                const oldUsersOnline = this.usersOnline;
                this.usersOnline += Math.floor(Math.random() * 20) - 10;
                this.usersOnline = Math.max(1000, Math.min(2000, this.usersOnline));
                
                // Animate total deposits
                this.totalDeposits += Math.floor(Math.random() * 500);
                
                // Animate rewards paid
                this.rewardsPaid += Math.floor(Math.random() * 300);
            }, 3000);
        },
        
        // Format numbers with commas
        formatNumber(num) {
            return num.toLocaleString();
        },
        
        // Initialize floating coins
        initFloatingCoins() {
            const createCoin = () => {
                return {
                    id: Date.now() + Math.random(),
                    x: Math.random() * 100,
                    duration: 10 + Math.random() * 10,
                    delay: Math.random() * 5
                };
            };
            
            // Create initial coins
            for (let i = 0; i < 8; i++) {
                this.floatingCoins.push(createCoin());
            }
            
            // Add new coins periodically
            setInterval(() => {
                if (this.floatingCoins.length < 12) {
                    this.floatingCoins.push(createCoin());
                }
            }, 3000);
            
            // Remove old coins
            setInterval(() => {
                if (this.floatingCoins.length > 8) {
                    this.floatingCoins.shift();
                }
            }, 5000);
        },
        
        // Testimonial auto-scroll
        startTestimonialAutoScroll() {
            setInterval(() => {
                this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
            }, 4000);
        },
        
        // Copy to clipboard with feedback
        copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                // Show feedback
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.classList.add('copy-feedback', 'show');
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.classList.remove('copy-feedback', 'show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            });
        },
        
        // Get referral link
        get referralLink() {
            return `https://beky.app?start=ref_${this.userId}`;
        },
        
        // Toggle chat widget
        toggleChat() {
            this.showChat = !this.showChat;
        },
        
        // Send chat message
        sendMessage() {
            if (this.newMessage.trim()) {
                // Add user message
                this.chatMessages.push({
                    id: Date.now(),
                    sender: 'user',
                    text: this.newMessage
                });
                
                const userMessage = this.newMessage;
                this.newMessage = '';
                
                // Simulate support response
                setTimeout(() => {
                    const responses = [
                        'Thank you for your message! Our team will get back to you soon.',
                        'Great question! You can start earning by making a deposit through our Telegram bot.',
                        'Our platform offers daily rewards with competitive rates. Would you like more details?',
                        'Withdrawals are processed instantly. You can request them through the Telegram bot.',
                        'We accept TON deposits. The minimum deposit amount is 10 TON.'
                    ];
                    
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    
                    this.chatMessages.push({
                        id: Date.now(),
                        sender: 'support',
                        text: randomResponse
                    });
                    
                    // Auto-scroll to bottom
                    this.$nextTick(() => {
                        const chatContainer = this.$el.querySelector('.h-64');
                        if (chatContainer) {
                            chatContainer.scrollTop = chatContainer.scrollHeight;
                        }
                    });
                }, 1000 + Math.random() * 2000);
            }
        },
        
        // Open Telegram bot
        openTelegramBot() {
            const telegramUrl = `https://t.me/beky_bot?start=ref_${this.userId}`;
            window.open(telegramUrl, '_blank');
            this.showTelegramModal = false;
        },
        
        // Initialize Telegram modal with auto-open
        initTelegramModal() {
            // Show modal after 8 seconds
            setTimeout(() => {
                this.showTelegramModal = true;
            }, 8000);
        },
        
        // Detect Telegram browser and apply optimizations
        detectTelegramBrowser() {
            const isTelegram = /Telegram/i.test(navigator.userAgent) || 
                               window.TelegramWebviewProxy !== undefined;
            
            if (isTelegram) {
                // Apply Telegram-specific optimizations
                document.body.classList.add('telegram-browser');
                
                // Adjust viewport for Telegram
                const viewport = document.querySelector('meta[name="viewport"]');
                if (viewport) {
                    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
                }
                
                // Disable some animations for better performance
                const style = document.createElement('style');
                style.textContent = `
                    .telegram-browser .animate-float {
                        animation: none;
                    }
                    .telegram-browser .fixed {
                        position: relative;
                    }
                `;
                document.head.appendChild(style);
            }
        },
        
        // Handle keyboard navigation
        handleKeydown(event) {
            if (event.key === 'Escape') {
                this.showTelegramModal = false;
                this.showChat = false;
            }
        }
    }));
});

// Error handling for graceful degradation
window.addEventListener('error', (event) => {
    console.error('Application error:', event.error);
    // Prevent console errors from breaking the app
    event.preventDefault();
});

// Handle unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});