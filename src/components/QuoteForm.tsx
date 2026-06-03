export default function QuoteForm() {
  return (
    <form className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Full name
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Company
          <input
            type="text"
            name="company"
            placeholder="Business / facility"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-muted">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
            required
          />
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Phone / WhatsApp
          <input
            type="tel"
            name="phone"
            placeholder="+971"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm text-muted md:col-span-2">
          Material type
          <select
            name="material"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground focus:border-primary focus:outline-none"
            required
          >
            <option value="">Select material</option>
            <option>Ferrous metals</option>
            <option>Non-ferrous metals</option>
            <option>Copper & cable</option>
            <option>Aluminum</option>
            <option>Stainless steel</option>
            <option>Brass</option>
            <option>Machinery & equipment</option>
            <option>Construction scrap</option>
            <option>Warehouse clearance</option>
            <option>E-waste</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-muted">
          Estimated quantity
          <input
            type="text"
            name="quantity"
            placeholder="Approx. tons"
            className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm text-muted">
        Pickup location
        <input
          type="text"
          name="location"
          placeholder="Dubai / Sharjah industrial area"
          className="h-12 rounded-xl border border-white/10 bg-surface px-4 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
          required
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Scrap images (optional)
        <input
          type="file"
          name="files"
          multiple
          className="rounded-xl border border-dashed border-white/15 bg-surface px-4 py-3 text-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-primary-foreground"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Inquiry details
        <textarea
          name="message"
          rows={4}
          placeholder="Share pickup timing, access notes, and any special handling requests."
          className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/90"
      >
        Get Instant Quote
      </button>
      <p className="text-xs text-muted">
        We respond with a tailored quote and pickup plan after review.
      </p>
    </form>
  );
}
