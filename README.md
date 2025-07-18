# Tone Genie - AI Text Enhancement Browser Extension

> Transform your writing instantly across any platform with AI-powered text enhancement.

## 🚀 Features

### Core Functionality
- **Smart Text Enhancement**: AI-powered grammar correction and style improvement
- **Context-Aware Writing**: Generate text from scratch based on context
- **Multiple Tone Options**: Professional, Romantic, Poetic, Casual, and Custom prompts
- **Universal Compatibility**: Works on Instagram, Twitter, WhatsApp, and any text field

### User Interface
- **Floating Circle Button**: Appears when you select text, contains Tone Genie logo
- **Tabbed Popup Interface**: Switch between Context Writing and Tone Writing modes
- **Instant Enhancement**: Quick fix option with inline rewrite/undo buttons

### Keyboard Shortcuts
- `Ctrl + Shift + H`: Context enhancing (opens popup)
- `Ctrl + Shift + Y`: Custom prompting (opens popup)  
- `Ctrl + Shift + U`: Blazing fast fix (instant enhancement)

## 🛠 Technical Stack

- **Build Tool**: Vite
- **Framework**: React JavaScript/TypeScript
- **AI Backend**: Gemini 2.0 Flash via custom API
- **Target Browsers**: Chrome, Firefox, Safari
- **Architecture**: Manifest V3 Browser Extension

## 📦 Installation

### Development Setup
```bash
# Clone the repository
git clone <repo-url>
cd tone-genie-extension

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Load Extension in Browser
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `dist` folder
4. The extension icon should appear in your browser toolbar

## 🎯 Usage

### Quick Enhancement
1. Select any text in a text field
2. Click the floating Tone Genie button that appears
3. Choose your enhancement type:
   - **Context Writing**: Provide context to generate new text
   - **Tone Writing**: Select tone or write custom prompt
4. Click "Enhance" to apply changes

### Keyboard Shortcuts
- **Context Enhancement** (`Ctrl + Shift + H`): Opens popup for context-based writing
- **Custom Prompting** (`Ctrl + Shift + Y`): Opens popup for tone selection
- **Quick Fix** (`Ctrl + Shift + U`): Instant grammar and style enhancement

### Platform Support
- ✅ Instagram (posts, comments, DMs)
- ✅ Twitter/X (tweets, replies)
- ✅ WhatsApp Web (messages)
- ✅ Gmail and other email clients
- ✅ Any website with text inputs

## 🔧 Configuration

### API Configuration
The extension uses a custom backend API:
- **Endpoint**: `https://tone-genie.vercel.app/api/enhance/route.ts`
- **Model**: Gemini 2.0 Flash
- **Authentication**: Not required for MVP

### Customization
- Keyboard shortcuts can be modified in `chrome://extensions/shortcuts`
- Default settings can be adjusted in the extension popup

## 🏗 Project Structure

```
tone-genie-extension/
├── src/
│   ├── content/
│   │   ├── content.js          # Main content script
│   │   ├── ui-components.js    # Floating button & popup
│   │   └── platform-handlers.js # Social media specific logic
│   ├── background/
│   │   └── background.js       # Service worker for API calls
│   ├── popup/
│   │   ├── popup.html         # Extension popup page
│   │   ├── popup.js           # Popup functionality
│   │   └── popup.css          # Popup styles
│   ├── assets/
│   │   └── logo.png           # Extension logo
│   └── styles/
│       └── content.css        # Injected styles
├── public/
│   └── manifest.json          # Extension manifest
├── vite.config.js             # Vite configuration
└── package.json
```

## 🔌 API Integration

### Request Format
```javascript
{
  "text": "original text to enhance",
  "options": {
    "prompt": "make this text more professional",
    "generationConfig": { 
      "temperature": 0.7 
    }
  }
}
```

### Response Format
```javascript
{
  "success": true,
  "enhancedText": "Enhanced version of the text"
}
```

### Error Handling
- Network errors are handled gracefully
- API failures show user-friendly messages
- Fallback options for offline usage

## 🎨 UI Components

### Floating Circle Button
- Appears on text selection
- Smooth fade animations
- Positioned dynamically
- Contains Tone Genie logo

### Enhancement Popup
- **Tab 1**: Context Writing
  - Context input field
  - Generate button
  - Preview area
- **Tab 2**: Tone Writing
  - Predefined tone buttons
  - Custom prompt input
  - Enhance button
  - Preview area

### Quick Fix Interface
- Instant enhancement on `Ctrl+Shift+U`
- Small inline buttons appear:
  - "Rewrite" (opens popup)
  - "Undo" (restores original)

## 🧪 Testing

### Manual Testing
1. Test on multiple platforms (Instagram, Twitter, WhatsApp)
2. Verify all keyboard shortcuts work
3. Test text selection and replacement
4. Verify API integration
5. Test error scenarios

### Browser Compatibility
- Chrome (primary)
- Firefox
- Safari (with modifications)

## 🐛 Troubleshooting

### Common Issues

**Extension not appearing**
- Ensure developer mode is enabled
- Check if extension is loaded in `chrome://extensions/`
- Try reloading the extension

**Shortcuts not working**
- Check `chrome://extensions/shortcuts` for conflicts
- Ensure page is fully loaded before using shortcuts
- Some sites may prevent shortcut events

**API errors**
- Check network connectivity
- Verify API endpoint is accessible
- Check browser console for error messages

**Text not enhancing**
- Ensure text is selected properly
- Check if the platform is supported
- Try refreshing the page

## 🔄 Development

### Build Commands
```bash
npm run dev          # Development with hot reload
npm run build        # Production build
npm run preview      # Preview production build
```

### Development Tips
- Use `chrome://extensions/` to reload extension after changes
- Check browser console for debugging
- Test on different platforms regularly
- Use React DevTools for component inspection

## 📋 Roadmap

### Current (MVP)
- ✅ Core text enhancement
- ✅ Floating UI button
- ✅ Keyboard shortcuts
- ✅ Platform compatibility
- ✅ API integration

### Future Features
- 🔄 User authentication
- 🔄 Payment system integration
- 🔄 Usage analytics
- 🔄 Custom tone training
- 🔄 Multi-language support
- 🔄 Team collaboration features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@tonegenie.com or create an issue in the repository.

---

**Made with ❤️ by the Tone Genie Team**