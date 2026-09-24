import { useState } from 'react'
import Swal from 'sweetalert2'


export default function Post() {
  const [type, setType] = useState('question')

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [abstractText, setAbstractText] = useState('')
  const [articleText, setArticleText] = useState('')
  const [tags, setTags] = useState('')
  const [errors, setErrors] = useState({})
  const [received, setReceived] = useState(false)

  function validate() {
    const e = {}
    if (!title.trim()) e.title = 'Title is required.'

    const splitTags = tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean)

    if (splitTags.length === 0) e.tags = 'Please add at least 1 tag.'
    if (splitTags.length > 3) e.tags = 'Please add up to 3 tags.'

    if (type === 'question') {
      if (!description.trim()) e.description = 'Description is required for a question.'
    } else {
      if (!abstractText.trim()) e.abstract = 'Abstract is required for an article.'
      if (!articleText.trim()) e.article = 'Article text is required.'
    }

    setErrors(e)
    return Object.keys(e).length === 0
  }

  function onSubmit(e) {
    e.preventDefault()
    setReceived(false)
    if (!validate()) return
    // No backend in this task — just show confirmation
    Swal.fire({
      title: 'Post Received',
      text: 'Thank you!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    setReceived(true)
    // reset form (keep selected type)
    setTitle('')
    setDescription('')
    setAbstractText('')
    setArticleText('')
    setTags('')
    setErrors({})
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="border border-gray-900 ">
        <div className="bg-black-200 px-4 py-3 border-b border-black-300 text-xl font-medium">
          New Post
        </div>

        <form onSubmit={onSubmit} className="p-4 space-y-4">
          <div className="flex items-center gap-4 text-sm text-black-700">
            <span className="min-w-[120px]">Select Post Type:</span>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="question"
                checked={type === 'question'}
                onChange={() => setType('question')}
              />
              <span>Question</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="article"
                checked={type === 'article'}
                onChange={() => setType('article')}
              />
              <span>Article</span>
            </label>
          </div>

          <div className="space-y-2">
            <div className="text-lg font-medium">What do you want to ask or share</div>

          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full border border-gray-400 px-2 py-2 text-sm bg-black-50"
              placeholder={type === 'question' ? 'Start your question with how, what, why, etc.' : 'Enter a descriptive title'}
            />
            {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title}</p>}
          </div>

          {type === 'question' && (
            <div>
              <label className="block text-sm font-medium mb-1">Describe your problem</label>
              <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="w-full border border-black-400 bg-black-50 px-2 py-2 text-sm h-40 resize-none"
                placeholder="Describe the problem"
              />
              {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description}</p>}
            </div>
          )}

          {type === 'article' && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1">Abstract</label>
                <textarea
                  value={abstractText}
                  onChange={e => setAbstractText(e.target.value)}
                  className="w-full border border-gray-400 bg-gray-50 px-2 py-2 text-sm h-24 resize-none"
                  placeholder="Enter a 1-paragraph abstract"
                />
                {errors.abstract && <p className="text-red-600 text-sm mt-1">{errors.abstract}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Article Text</label>
                <textarea
                  value={articleText}
                  onChange={e => setArticleText(e.target.value)}
                  className="w-full border border-gray-400 bg-gray-50 px-2 py-2 text-sm h-40 resize-none"
                  placeholder="Enter the article content"
                />
                {errors.article && <p className="text-red-600 text-sm mt-1">{errors.article}</p>}
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium mb-1">Tags</label>
            <input
              value={tags}
              onChange={e => setTags(e.target.value)}
              className="w-full border border-gray-400 bg-gray-50 px-2 py-2 text-sm"
              placeholder="Please add up to 3 tags "
            />
            {errors.tags && <p className="text-red-600 text-sm mt-1">{errors.tags}</p>}
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" className="px-8 py-2 bg-gray-300 text-black border border-gray-400 hover:bg-gray-400 font-medium">
              Post
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}